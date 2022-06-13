import { useParticleMaterial } from "./shaders/particles";
import { useEffect, useMemo, useRef } from "react";
import {
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  InstancedMesh,
  Object3D,
} from "three";
import { GroupProps, useFrame } from "@react-three/fiber";
import { positions } from "./utils/constants";

const COUNT = 500;
const X_RANGE = 10;
// const X_RANGE = 1;
const Z_RANGE = 8;
// const Z_RANGE = 1;
const XZ_POW = 1.2;
const Y_RANGE = 3;
const Y_POW = 2;
const SCALE = 30;

export default function AmbientParticles(props: GroupProps) {
  const mesh = useRef<InstancedMesh>();

  const particleMaterial = useParticleMaterial();

  const dummy = useMemo(() => new Object3D(), []);

  useEffect(() => {
    if (!mesh.current) return;

    const seeds = new Float32Array(COUNT);
    // let positions = "";

    for (let i = 0; i < COUNT; i++) {
      const rx = positions[3*i];
      const ry = positions[3*i + 1];
      const rz = positions[3*i + 2];

      // positions += `${rx}, `
      // positions += `${ry}, `
      // positions += `${rz}, `

      const x = rx * X_RANGE;
      const z = rz * Z_RANGE;
      const y = ry * Y_RANGE;
      dummy.position.fromArray([x, y, z]);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      seeds[i] = Math.random();
    }
    mesh.current.instanceMatrix.needsUpdate = true;

    // console.log(positions);

    (mesh.current.geometry as InstancedBufferGeometry).setAttribute(
      "seed",
      new InstancedBufferAttribute(seeds, 1, false, COUNT)
    );
  }, [COUNT, mesh]);

  useFrame(({ clock }) => {
    if (particleMaterial) {
      particleMaterial.uniforms.time.value = clock.getElapsedTime() * 0.4;
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
      >
        <sphereBufferGeometry args={[0.015 * SCALE, 16, 20]} />
      </instancedMesh>
    </group>
  );
}
