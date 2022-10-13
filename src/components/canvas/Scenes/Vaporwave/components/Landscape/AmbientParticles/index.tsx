import {useParticleMaterial} from "./shaders/particles";
import {useEffect, useMemo, useRef} from "react";
import {InstancedBufferAttribute, InstancedBufferGeometry, InstancedMesh, Object3D,} from "three";
import {GroupProps, useFrame} from "@react-three/fiber";
import {positions} from "./utils/constants";
import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";
import {v4 as uuidv4} from "uuid";

const COUNT = 500;
const X_RANGE = 10;
const Z_RANGE = 16;
const XZ_POW = 1.2;
const Y_RANGE = 7;
const Y_POW = 2;
const SCALE = 30;

export default function AmbientParticles(props: GroupProps) {
  
  const mesh = useRef<InstancedMesh>();
  const uuid = useRef(uuidv4());
  const {playlist, aa, getVolume, objectQueued, objectRendered} = useStore((state) => ({
    playlist: state.playlist,
    aa: state.aa,
    getVolume: state.getVolume,
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered,
  }), shallow);
  
  const particleMaterial = useParticleMaterial();
  
  const dummy = useMemo(() => new Object3D(), []);
  const generate = false;
  
  useEffect(() => {
    
    objectQueued(uuid.current);
    
  }, []);
  
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
    
  }, [COUNT, mesh, playlist.id]);
  
  useFrame(({clock}) => {
    
    if (particleMaterial) {
      
      particleMaterial.uniforms.time.value = clock.getElapsedTime() * 0.4;
      if (aa) particleMaterial.uniforms.volume.value = getVolume();
      
    }
    
  });
  
  return (
    <group name="ambient-particles" {...props}>
      {/* @ts-ignore */}
      <instancedMesh
        ref={mesh}
        // @ts-ignore
        args={[null, null, COUNT]}
        material={particleMaterial}
        onAfterRender={() => objectRendered(uuid.current)}
      >
        <sphereBufferGeometry args={[!aa ? 0 : 0.015 * SCALE, 16, 20]}/>
      </instancedMesh>
    </group>
  );
  
}
