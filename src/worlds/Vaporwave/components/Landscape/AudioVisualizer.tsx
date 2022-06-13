import {
  AudioAnalyser,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Vector3
} from 'three'
import {ReactNode, useEffect, useMemo, useRef} from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr"
import { useWorld } from "../WorldState";
import { animated } from "react-spring/three";
import * as THREE from "three";
import {positions} from "./AmbientParticles/utils/constants";

type VisualizerProps = {
  barCount?: number,
  barWidth?: number,
  barHeight?: number,
  reverse?: boolean,
  radius?: number,
  index: number
} & GroupProps

export default function AudioVisualizer (props: VisualizerProps) {

  const {
    barCount = 32,
    barWidth = 0.025,
    barHeight = 0.25,
    reverse,
    radius = 0.5,
    index,
    ...restProps
  } = props;
  const group1 = useRef();
  const group2 = useRef();
  const mesh = useRef();
  const mesh2 = useRef();
  const cubes: ReactNode[] = [];
  const { palette, aa } = useWorld();
  const colors: THREE.Color[] = [];
  const instancedMeshMat = new MeshStandardMaterial({ metalness: 0.9, roughness: 0.5 })

  for (const color of palette) {
    colors.push(new THREE.Color(color))
  }

  const dummy = useMemo(() => new Object3D(), []);
  const dummy2 = useMemo(() => new Object3D(), []);

  useEffect(() => {
    if (!mesh.current) return;

    const seeds = new Float32Array(barCount);

    for (let i = 0; i < barCount*2; i++) {
      const right = i%2;
      if (right) {
        dummy.position.fromArray([radius, 0, (i/2 * barWidth + i / 50) - 1.25]);
      } else {
        dummy.position.fromArray([-radius, 0, (((i-1)/2) * barWidth + i / 50) - 1.25]);
      }
      dummy.updateMatrix();
      // @ts-ignore
      mesh.current.setMatrixAt(i, dummy.matrix);
      // @ts-ignore
      mesh.current.setColorAt(i, colors[Math.floor(Math.random()*colors.length)])
      // seeds[i] = 0.5;
    }
    // @ts-ignore
    mesh.current.instanceMatrix.needsUpdate = true;
    // @ts-ignore
    mesh.current.instanceColor.needsUpdate = true;

    // @ts-ignore
    // (mesh.current.geometry as InstancedBufferGeometry).setAttribute(
    //   "seed",
    //   new InstancedBufferAttribute(seeds, 1, false, barCount)
    // );


    // const mat4 = new Matrix4()
    // // @ts-ignore
    // mesh.current.getMatrixAt(0, mat4)
    // console.log(mat4)


  }, [barCount, mesh]);

  // for (let i = 0; i < barCount; ++i) {
  //   cubes.push(
  //     <instancedMesh
  //       ref={mesh}
  //       name={`cube-${index}-${i}`}
  //       // position={new Vector3(0, 0, i * barWidth + i / 50)}
  //       key={`cube-${index}-${i}`}>
  //       <boxBufferGeometry args={[barWidth, barHeight, barWidth, 1, 15]} />
  //       <animated.meshStandardMaterial
  //         color={new THREE.Color(palette[Math.floor(Math.random() * palette.length)])}
  //         metalness={0.9}
  //         roughness={0.5}
  //       />
  //     </instancedMesh>
  //   )
  // }

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group1.current || !group2.current || !aa || !mesh.current) return;
    const data = aa.getFrequencyData();
    const step = data.length / cubes.length;


    for (let i = 0; i<barCount; i++) {
      const right = i%2;
      // const cubeMatrix = new Matrix4();
      const newHeight = Math.max(data[i * step] / 100 + 0.25, barHeight/2);
      // dummy2.position.fromArray([0, 0, i * barWidth + i / 50]);
      dummy.scale.set(barWidth, THREE.MathUtils.lerp(dummy.scale.y, newHeight, 0.9), barWidth);
      dummy.updateMatrix();
      // console.log(newHeight)
      // @ts-ignore
      mesh.current.setMatrixAt(i*2+1, dummy.matrix)
      // @ts-ignore
      mesh.current.setMatrixAt(i*2+2, dummy.matrix)
      // cubeMatrix.makeScale(0, newHeight, 0)
      // @ts-ignore
      // mesh.current.setMatrixAt(i, cubeMatrix)
      // @ts-ignore
      // console.log(mesh.current.getMatrixAt(0, cubeMatrix))
    }
    // @ts-ignore
    mesh.current.instanceMatrix.needsUpdate = true;

    // for (let i = 0; i < cubes.length; ++i) {
    //   // @ts-ignore
    //   const cube = group1.current.getObjectByName(`cube-${index}-${i}`);
    //   cube.scale.y = Math.max(data[i * step] / 100 + 0.25, barHeight/2);
    //   cube.geometry.computeBoundingBox();
    //   // @ts-ignore
    //   const cube2 = group2.current.getObjectByName(`cube-${index}-${i}`);
    //   cube2.scale.y = Math.max(data[i * step] / 100 + 0.25, barHeight/2);
    //   cube2.geometry.computeBoundingBox();
    // }
  })

  // @ts-ignore
  return (
    <group {...restProps}>
      <group ref={group1} position={[0, 0, reverse ? 2 : 0]} rotation-y={reverse ? Math.PI : 0}>
        <instancedMesh
          ref={mesh}
          name="cubes-1"
          key="cubes-1"
          // @ts-ignore
          args={[null, null, barCount*2]}
          material={instancedMeshMat}
        >
          <boxBufferGeometry args={[barWidth, barHeight, barWidth, 1, 1]} />
        </instancedMesh>
      </group>
      <group ref={group2} position={[0, 0, reverse ? 2 : 0]} rotation-y={reverse ? Math.PI : 0}>
        {/*<instancedMesh*/}
        {/*  ref={mesh2}*/}
        {/*  name="cubes-2"*/}
        {/*  // position={new Vector3(0, 0, i * barWidth + i / 50)}*/}
        {/*  key="cubes-2"*/}
        {/*  // @ts-ignore*/}
        {/*  args={[null, null, barCount]}*/}
        {/*  material={instancedMeshMat}*/}
        {/*>*/}
        {/*  <boxBufferGeometry args={[barWidth, barHeight, barWidth, 1, 15]} />*/}
        {/*</instancedMesh>*/}
      </group>
    </group>
  )
}
