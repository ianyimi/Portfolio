import {GroupProps} from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import * as THREE from "three";

export default function ProfileCard(props: GroupProps) {
  
  const texture = useTexture("https://dqeczc7c9n9n1.cloudfront.net/images/profile.JPG");
  
  return (
    <group {...props}>
      <mesh>
        <planeBufferGeometry args={[0.5, 0.25]}/>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
      </mesh>
      <mesh rotation-x={3 * Math.PI / 2} position-z={0.015}>
        <boxBufferGeometry args={[0.5, 0.025, 0.25]}/>
        <meshStandardMaterial color="black"/>
      </mesh>
    </group>
  )
  
}
