import {GroupProps, useFrame} from "@react-three/fiber";
import {CatmullRomLine} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from "three";
import {useLimiter} from "spacesvr";

type CurveProps = {
  color: string,
  width: number,
  speed: number,
  dashed?: boolean,
  curve: number[][]
} & GroupProps

export default function AnimatedCurve(props: CurveProps) {
  
  const line = useRef<THREE.Group>(null)
  const {color, width, speed, dashed = false, curve} = props;
  
  const limiter = useLimiter(30);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock) || !line.current) return;
    line.current.material.uniforms.dashOffset.value -= speed;
  })
  
  return (
    <group {...props}>
      <CatmullRomLine
        ref={line}
        points={curve}
        lineWidth={width}
        color={color}
        dashed={dashed}
        dashSize={0.25}
        dashScale={2}
        curveType="centripetal"
      />
    </group>
  )
  
}
