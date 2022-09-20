import Road from "../models/Road";
import {useRef} from "react";
import * as THREE from "three";
import AmbientParticles from "./AmbientParticles";
import FogClouds from "./FogClouds";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";

export default function EnvironmentHandler() {
  
  const speed = 0.2;
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock)) return;
    
  })
  
  return (
    
    <group>
      <AmbientParticles position-y={1.25}/>
      {/*<FogClouds position={[0, 1, 0]}/>*/}
      <Road speed={speed}/>
    </group>
  
  );
  
}

