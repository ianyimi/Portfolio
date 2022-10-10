import {GroupProps, useThree} from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import * as THREE from "three";
import {useEffect, useRef} from "react";

export default function ProfileCard(props: GroupProps) {
  
  const {camera} = useThree();
  const group = useRef<THREE.Group>(null);
  const texture = useTexture("https://dqeczc7c9n9n1.cloudfront.net/images/profile.JPG");
  const lw = [2, 1],
    bezelWidth = 0.1;
  
  // useEffect(() => {
  //   if (!group.current) return;
  //   group.current.lookAt(camera.position)
  // }, [group.current])
  
  return (
    <group ref={group} {...props}>
      <mesh>
        <planeBufferGeometry args={lw}/>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
      </mesh>
      <mesh rotation-x={3 * Math.PI / 2} position-z={0.015}>
        <boxBufferGeometry args={[lw[0] + bezelWidth, 0.025, lw[1] + bezelWidth]}/>
        <meshStandardMaterial color="black"/>
      </mesh>
    </group>
  )
  
}
