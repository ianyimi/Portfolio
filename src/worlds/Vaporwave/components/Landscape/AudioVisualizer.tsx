import {AudioAnalyser, Mesh, Vector3} from 'three'
import {ReactNode, useRef} from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr"
import { useWorld } from "../WorldState";
import { animated } from "react-spring/three";
import * as THREE from "three";

type VisualizerProps = {
  barCount?: number,
  barWidth?: number,
  barHeight?: number,
  reverse?: boolean,
  radius?: number,
  aa: AudioAnalyser,
  index: number
} & GroupProps

export default function AudioVisualizer (props: VisualizerProps) {

  const {
    barCount = 32,
    barWidth = 0.025,
    barHeight = 0.25,
    reverse,
    radius = 0.5,
    aa,
    index,
    ...restProps
  } = props;
  const group1 = useRef();
  const group2 = useRef();
  const cubes: ReactNode[] = [];
  const { palette } = useWorld();

  for (let i = 0; i < barCount; ++i) {
    cubes.push(<mesh name={`cube-${index}-${i}`} position={new Vector3(0, 0, i * barWidth + i / 50)} key={`cube-${index}-${i}`}>
      <boxBufferGeometry args={[barWidth, barHeight, barWidth, 1, 15]} />
      <animated.meshStandardMaterial
        color={new THREE.Color(palette[Math.floor(Math.random() * palette.length)])}
        metalness={0.9}
        roughness={0.5}
      />
    </mesh>)
  }

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group1.current || !group2.current) return;
    const data = aa.getFrequencyData()
    const step = data.length / cubes.length;
    for (let i = 0; i < cubes.length; ++i) {
      // @ts-ignore
      const cube = group1.current.getObjectByName(`cube-${index}-${i}`);
      cube.scale.y = Math.max(data[i * step] / 100 + 0.25, barHeight/2);
      cube.geometry.computeBoundingBox();
      // @ts-ignore
      const cube2 = group2.current.getObjectByName(`cube-${index}-${i}`);
      cube2.scale.y = Math.max(data[i * step] / 100 + 0.25, barHeight/2);
      cube2.geometry.computeBoundingBox();
    }
  })

  return (
    <group {...restProps}>
      <group ref={group1} position={[radius, 0, reverse ? 2 : 0]} rotation-y={reverse ? Math.PI : 0}>
        {cubes}
      </group>
      <group ref={group2} position={[-radius, 0, reverse ? 2 : 0]} rotation-y={reverse ? Math.PI : 0}>
        {cubes}
      </group>
    </group>
  )
}
