import {useParticleMaterial} from "./shaders/particles";
import {useEffect, useMemo, useRef} from "react";
import {InstancedBufferAttribute, InstancedBufferGeometry, InstancedMesh, Object3D, Group} from "three";
import {GroupProps, useFrame} from "@react-three/fiber";
import {positions} from "./utils/constants";
import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";
import {useLimiter} from "spacesvr";

const COUNT = 500;
const X_RANGE = 100;
const Z_RANGE = 50;
const XZ_POW = 1.2;
const Y_RANGE = 25;
const Y_POW = 2;
const SCALE = 30;

export default function AmbientParticles(props: { speed: number } & GroupProps) {
  
  const {speed, ...restProps} = props;
  const mesh = useRef<InstancedMesh>(null);
  const iMesh = useRef<Group>(null);
  const iMesh2 = useRef<Group>(null);
  const {objectQueued, objectRendered} = useStore((state) => ({
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered,
  }), shallow);
  
  const particleMaterial = useParticleMaterial();
  
  const dummy = useMemo(() => new Object3D(), []);
  const generate = false;
  const respawn = 30;
  
  useEffect(() => {
    
    if (!mesh.current) return;
    
    const seeds = new Float32Array(COUNT);
    let newPositions = "";
    
    for (let i = 0; i < COUNT; i++) {
      
      const rx = positions[3 * i];
      const ry = positions[3 * i + 1];
      const rz = positions[3 * i + 2];
      
      if (generate) {
        
        newPositions += `${rx}, `;
        newPositions += `${ry}, `;
        newPositions += `${rz}, `;
        
      }
      
      const x = rx * X_RANGE;
      const z = rz * Z_RANGE;
      const y = ry * Y_RANGE;
      dummy.position.fromArray([x, y, z]);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      seeds[i] = 0.5;
      
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
    
    generate && console.log(newPositions);
    
    (mesh.current.geometry as InstancedBufferGeometry).setAttribute(
      "seed",
      new InstancedBufferAttribute(seeds, 1, false, COUNT)
    );
    
  }, [COUNT, mesh]);
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    
    if (!limiter.isReady(clock) || !particleMaterial || !iMesh.current || !iMesh2.current) return;
    
    particleMaterial.uniforms.time.value = clock.getElapsedTime() * 0.4;
    
    for (const group of [iMesh.current, iMesh2.current]) {
      group.position.x -= speed / 2;
      if (group.position.x < -respawn) {
        group.position.x = respawn;
      }
    }
    
    
  });
  
  return (
    <group name="ambient-particles" {...restProps}>
      <group position-y={1.25}>
        <group ref={iMesh}>
          {/* @ts-ignore */}
          <instancedMesh
            // @ts-ignore
            ref={mesh}
            args={[null, null, COUNT]}
            material={particleMaterial}
          >
            <sphereBufferGeometry args={[0.015 * SCALE, 16, 20]}/>
          </instancedMesh>
        </group>
        <group position-x={30} ref={iMesh2}>
          {/* @ts-ignore */}
          <instancedMesh
            // @ts-ignore
            args={[null, null, COUNT]}
            material={particleMaterial}
          >
            <sphereBufferGeometry args={[0.015 * SCALE, 16, 20]}/>
          </instancedMesh>
        </group>
      </group>
    </group>
  );
  
}
