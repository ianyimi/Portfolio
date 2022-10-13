import {GroupProps} from "@react-three/fiber";
import {Cloud} from "@react-three/drei";
import * as THREE from "three";

export default function FogClouds(props: GroupProps) {
  
  return (
    <group {...props}>
      <group rotation-y={Math.PI / 2}>
        <Cloud width={1} depth={0.25} opacity={0.25} speed={0.1} segments={10}/>
        {/*<Cloud width={1} opacity={0.25} speed={0.1}/>*/}
      </group>
    </group>
  )
  
}

