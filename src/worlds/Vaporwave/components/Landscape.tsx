import { useLimiter, Fog } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, {useEffect, useRef} from "react";
import Terrain from "./Terrain";
import { useWorld } from "./WorldState";
import { usePlane } from "@react-three/cannon";
import * as THREE from "three";
import {DoubleSide} from "three";

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

export default function Landscape() {
  const terrain1Ref = useRef();
  const terrain2Ref = useRef();

  const { palette } = useWorld();
  const colorIndex = 3;

  const [collider, api] = usePlane(() => ({
    args: [2, 5],
    rotation: [-Math.PI * 0.5, 0, 0],
    type: "Static"
  }))

  const limiter = useLimiter(30);
  useFrame(({ clock }) => {
    if (!limiter.isReady || !terrain1Ref.current || !terrain2Ref.current) return;
    // @ts-ignore
    terrain1Ref.current.position.z = (clock.getElapsedTime() * 0.15) % 2;
    // @ts-ignore
    terrain2Ref.current.position.z = ((clock.getElapsedTime() * 0.15) % 2) - 2;
  });

  const onClick = () => {
    console.log("click")
  }
  useEffect(() => {
    document.addEventListener("click", onClick);
    // return (
    //   document.removeEventListener("click", onClick)
    // )
  }, [])

  return (
    <group>
      <Terrain ref={terrain1Ref} z={0} />
      <Terrain ref={terrain2Ref} z={-2} />
      <Fog color={new THREE.Color(palette[colorIndex].x, palette[colorIndex].y, palette[colorIndex].z)} near={1} far={2.75} />
      <mesh>
        <boxBufferGeometry args={[10, 10, 10]} />
        <meshStandardMaterial
          color={new THREE.Color(palette[colorIndex].x, palette[colorIndex].y, palette[colorIndex].z)}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={collider}>
        <planeBufferGeometry attach="geometry" args={[2, 5, 24, 24]} />
        <meshBasicMaterial visible={false} />
      </mesh>
    </group>
  );
};
