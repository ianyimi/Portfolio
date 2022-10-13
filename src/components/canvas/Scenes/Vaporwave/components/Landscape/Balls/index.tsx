import Ball from "./Ball";
import {useTexture} from "@react-three/drei";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";
import {useStore} from "../../../../../../../utils/store";
import shallow from "zustand/shallow";

const TEXTURES = [
  "https://dqeczc7c9n9n1.cloudfront.net/images/marble1.jpg",
  "https://dqeczc7c9n9n1.cloudfront.net/images/marble2.jpg",
  "https://dqeczc7c9n9n1.cloudfront.net/images/marble3.jpg",
  "https://dqeczc7c9n9n1.cloudfront.net/images/marble4.jpg",
];

const BALL_START_POSITIONS: [x: number, y: number, z: number][] = [
  [0.075, 0.05, -1.15],
  // [ 0.025, 0.1, - 3 ],
  [-0.025, 0.1, -1.75],
  [-0.05, 0.075, -2.5],
  [-0.1, 0.125, -3.25],
];

const BALL_SPEED_FACTOR = 0.0015;
const BALL_RESPAWN_POINT = 1.15;
const DELTA = 0.0333;

export default function Balls() {
  
  const ball = useRef();
  const ball1 = useRef();
  const ball2 = useRef();
  const ball3 = useRef();
  // const ball4 = useRef();
  const ballRefs = [ball, ball1, ball2, ball3];
  // const {refs} = props;
  const tex = useTexture(TEXTURES[0]);
  const tex2 = useTexture(TEXTURES[1]);
  const tex3 = useTexture(TEXTURES[2]);
  const tex4 = useTexture(TEXTURES[3]);
  const textures = [tex, tex2, tex3, tex4];
  
  const {getSpeed} = useStore((state: any) => ({
    getSpeed: state.getSpeed,
  }), shallow);
  
  const balls = [];
  for (let i = 0; i < ballRefs.length; i++) {
    
    balls.push(
      <Ball
        ref={ballRefs[i]}
        pos={BALL_START_POSITIONS[i]}
        texture={textures[i]}
        index={i}
      />
    );
    
  }
  
  const limiter = useLimiter(30);
  useFrame(({clock}) => {
    
    if (
      !limiter.isReady(clock) ||
      !ball.current ||
      !ball1.current ||
      !ball2.current ||
      !ball3.current
    ) return;
    
    const speed = getSpeed();
    
    for (let i = 0; i < ballRefs.length; i++) {
      
      const ball = ballRefs[i];
      
      // @ts-ignore
      ball.current.position.z += DELTA / (5 * speed) - BALL_SPEED_FACTOR;
      
      // @ts-ignore
      if (ball.current.position.z + BALL_START_POSITIONS[i][2] >= BALL_RESPAWN_POINT) {
        
        // @ts-ignore
        ball.current.position.z = BALL_START_POSITIONS[i][2] + BALL_RESPAWN_POINT;
        
      }
      
    }
    
  });
  
  return (
    <group>
      {balls}
    </group>
  );
  
}
