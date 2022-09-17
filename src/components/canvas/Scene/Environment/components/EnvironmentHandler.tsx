import Bridge from "../models/Bridge";
import Street from "../models/Street";
import Tunnel3 from "../models/Tunnel";
import Road from "../models/Newroad";
import {useRef} from "react";
import {useLimiter} from "spacesvr";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import street from "../models/Street";

export default function EnvironmentHandler() {
  
  const bridgeOne = useRef<THREE.Group>();
  const bridgeTwo = useRef<THREE.Group>();
  const tunnelOne = useRef<THREE.Group>();
  const tunnelTwo = useRef<THREE.Group>();
  const streetOne = useRef<THREE.Group>();
  const streetTwo = useRef<THREE.Group>();
  // const refs = useRef({ref1: streetOne, ref2: streetTwo});
  
  const bridgeRespawn = 150,
    streetRespawn = 215,
    tunnelRespawn = 60;
  
  const speed = 0.5;
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    
    if (!limiter.isReady(clock) || !streetOne.current || !streetTwo.current) return;
    
    console.log(streetOne.current.position.z, streetTwo.current.position.z)
    for (const street of [streetOne.current, streetTwo.current]) {
      
      
      street.position.z -= speed;
      if (street.position.z <= 0 - streetRespawn) street.position.z = 3 * streetRespawn / 2;
      
    }
    
    // for (const bridge of [bridgeOne.current, bridgeTwo.current]) {
    //
    //   bridge.position.x -= speed;
    //   if (bridge.position.x <= 0 - bridgeRespawn / 2.5) bridge.position.x = bridgeRespawn / 2;
    //
    // }
    
  });
  
  return (
    
    <group>
      {/*<Tunnel3 ref={bridgeOne} />*/}
      {/*<Tunnel3 position-x={tunnelRespawn} ref={bridgeTwo} />*/}
      {/*<Bridge ref={bridgeOne}/>*/}
      {/*<Bridge position-x={bridgeRespawn} ref={bridgeTwo}/>*/}
      {/*<Street ref={streetOne}/>*/}
      {/*<Street ref={streetTwo} position-x={3 * streetRespawn / 2}/>*/}
      <Road ref1={streetOne} ref2={streetTwo}/>
    </group>
  
  );
  
}

