import Tunnel3 from "../models/Tunnel";
import Road from "../models/Newroad";
import {useRef} from "react";
import {useLimiter} from "spacesvr";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

export default function EnvironmentHandler() {
  
  const tunnelOne = useRef<THREE.Group>();
  const tunnelTwo = useRef<THREE.Group>();
  
  const speed = 0.35;
  
  
  return (
    
    <group>
      {/*<Tunnel3 ref={bridgeOne} />*/}
      {/*<Tunnel3 position-x={tunnelRespawn} ref={bridgeTwo} />*/}
      <Road speed={speed}/>
    </group>
  
  );
  
}

