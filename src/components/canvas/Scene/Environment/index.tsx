import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import SL190 from "./models/SL190";
import {Suspense} from "react";
import {Sky} from "@react-three/drei";

export default function Environment(props: GroupProps) {
  
  return (
    <group {...props}>
      <ambientLight intensity={0.5}/>
      <spotLight position={[3, 3, 0]} intensity={1} castShadow/>
      <Sky sunPosition={[0, 1, 0]}/>
      <Suspense fallback={null}>
        <SL190/>
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
