import { useTexture } from "@react-three/drei";
import React, {useRef, useState} from "react";
import { animated, useSpring } from "react-spring/three";
import { useWorld } from "./WorldState";
import MatrixSky from "./MatrixSky";

const Terrain = React.forwardRef((props: { z: number }, ref) => {
  const { z } = props;
  const { themeColor } = useWorld()

  const [heightTexture, metalnessTexture] = useTexture([
    "displacement-7.png",
    "metalness-2.png",
  ]);

  const { color } = useSpring({
    color: themeColor,
    args: {
      mass: 1
    }
  })

  return (
    // @ts-ignore
    <group ref={ref} position={[0, 0, z]}>
      <MatrixSky />
      <group rotation={[-Math.PI * 0.5, 0, 0]}>
        <mesh>
          <animated.meshStandardMaterial
            color={color}
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
