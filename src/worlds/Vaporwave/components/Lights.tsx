import { Object3D } from "three";
import { useRef } from "react";
import { useWorld } from "./WorldState";
import { animated } from "react-spring/three";
import * as THREE from "three";

export default function Lights() {
  const spotlight1Ref = useRef();
  const spotlight2Ref = useRef();
  const { palette } = useWorld();
  const colorIndex = 2;

  const dummy1 = new Object3D(),
    dummy2 = new Object3D();
  dummy1.position.set(-0.25, 0.25, 0.25);
  dummy2.position.set(0.25, 0.25, 0.25);

  return (
    <>
      <animated.spotLight
        ref={spotlight1Ref}
        target={dummy1}
        color={new THREE.Color(palette[colorIndex].x, palette[colorIndex].y, palette[colorIndex].z)}
        intensity={40}
        position={[0.5, 0.75, 2.1]}
        distance={25}
        angle={Math.PI * 0.1}
        penumbra={0.25}
        decay={10}
      />
      <animated.spotLight
        ref={spotlight2Ref}
        target={dummy2}
        color={new THREE.Color(palette[colorIndex].x, palette[colorIndex].y, palette[colorIndex].z)}
        intensity={40}
        position={[-0.5, 0.75, 2.1]}
        distance={25}
        angle={Math.PI * 0.1}
        penumbra={0.25}
        decay={10}
      />
    </>
  );
};
