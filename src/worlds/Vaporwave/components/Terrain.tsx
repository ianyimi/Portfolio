import { useTexture } from "@react-three/drei";
import React, {useRef, useState} from "react";
import { animated, useSpring } from "react-spring/three";
import { useWorld } from "./WorldState";
import MatrixSky from "./MatrixSky";
import * as THREE from "three";
import {Vector3} from "three";

const Terrain = React.forwardRef((props: { z?: number }, ref) => {
  const { z = 0 } = props;
  const { palette } = useWorld()
  const lineColorIndex = 0;
  const baseColorIndex = 4;

  const [heightTexture, metalnessTexture] = useTexture([
    "displacement-7.png",
    "metalness-2.png",
  ]);

  const { lineColor, baseColor } = useSpring({
    lineColor: new THREE.Color(palette[lineColorIndex]),
    baseColor: new THREE.Color(palette[baseColorIndex]),
    args: {
      mass: 1
    }
  })

  return (
    // @ts-ignore
    <group ref={ref} position={[0, 0, 0]}>
      <MatrixSky />
      <group rotation={[-Math.PI * 0.5, 0, 0]}>
        <mesh>
          <animated.meshStandardMaterial
            color={lineColor}
            displacementMap={heightTexture}
            displacementScale={0.4}
            metalnessMap={metalnessTexture}
            metalness={0.9}
            roughness={0.5}
            wireframe
          />
          <planeBufferGeometry attach="geometry" args={[1, 2, 24, 24]} />
        </mesh>
        <mesh>
          <meshStandardMaterial
            color="black"
            displacementMap={heightTexture}
            displacementScale={0.3975}
            metalnessMap={metalnessTexture}
            metalness={0.9}
            roughness={0.5}
          />
          <planeBufferGeometry attach="geometry" args={[1, 2, 24, 24]} />
        </mesh>
        <mesh position-y={-0.1}>
          <meshStandardMaterial
            color="black"
            metalnessMap={metalnessTexture}
            metalness={0.9}
            roughness={0.5}
          />
          <planeBufferGeometry attach="geometry" args={[1, 2, 24, 24]} />
        </mesh>
      </group>
    </group>
  );
});

export default Terrain
