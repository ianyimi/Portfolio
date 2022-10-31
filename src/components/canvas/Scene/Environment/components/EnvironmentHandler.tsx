import Road from "../models/Road";
import React, {useRef, useState} from "react";
import * as THREE from "three";
import AmbientParticles from "./AmbientParticles";
import Planet from "./Planet";
import StarDestroyer from "../models/StarDestroyer";
import FogClouds from "./FogClouds";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";

// const FOREGROUND = {
//   speed: 0.2,
//   cutoff: 30,
//   respawn: 30
// };
// const MIDGROUND = {
//   speed: 0.1,
//   cutoff: 30,
//   respawn: 30
// };
// const BACKGROUND = {
//   speed: 0.5,
//   cutoff: 300,
//   respawn: 250
// };

const GROUNDS = {
  foreground: {
    speed: 0.2,
    cutoff: 30,
    respawn: 30
  },
  midground: {
    speed: 0.1,
    cutoff: 30,
    respawn: 30
  },
  background: {
    speed: 0.025,
    cutoff: 300,
    respawn: 250
  }
}

export default function EnvironmentHandler() {
  
  const fg = useRef<THREE.Group>(),
    fg2 = useRef<THREE.Group>(),
    mg = useRef<THREE.Group>(),
    mg2 = useRef<THREE.Group>(),
    bg = useRef<THREE.Group>(),
    bg2 = useRef<THREE.Group>(),
    groundRefs = [[fg, fg2], [bg, bg2]];
  
  const [currentBackground, setBackground] = useState<number>(0);
  const backgrounds = [
    <Planet position={[10, 0, -10]} planet="Stormy" key={0}/>,
    // <Planet position={[-20, 0, -30]} planet="Molten" key={0}/>,
    <StarDestroyer key={1}/>
  ]
  // const upcomingBackgrounds = [];
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock) ||
      !fg.current ||
      !fg2.current ||
      !bg.current ||
      !bg2.current
    ) return;
    
    for (const grounds of (groundRefs)) {
      for (const group of grounds) {
        const groundName = group.current.className;
        group.current.position.x -= GROUNDS[groundName].speed;
        if (group.current.position.x < -GROUNDS[groundName].cutoff) {
          group.current.position.x = GROUNDS[groundName].respawn;
        }
      }
    }
  })
  
  return (
    <group>
      <group name="foreground">
        <group ref={fg} className="foreground">
          <AmbientParticles/>
        </group>
        <group position-x={15} ref={fg2} className="foreground">
          <AmbientParticles/>
        </group>
      </group>
      <group name="midground">
        <group ref={mg} className="midground">
        </group>
      </group>
      <group name="background">
        <group ref={bg} className="background">
          {/*{backgrounds[currentBackground]}*/}
        </group>
        <group ref={bg2} className="background">
          {/*{backgrounds[currentBackground + 1]}*/}
        </group>
      </group>
    </group>
  
  );
  
}
