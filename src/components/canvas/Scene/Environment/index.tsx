import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import SL190 from "./models/SL190";
import {Suspense} from "react";
import {Stars, Sky} from "@react-three/drei";

export default function Environment(props: GroupProps) {
  
  return (
    <group {...props}>
      <ambientLight intensity={0.5}/>
      {/*<spotLight position={[3, 3, 0]} intensity={1} castShadow/>*/}
      {/*<CustomFog color="black" near={0.1} far={50}/>*/}
      <Sky sunPosition={1} distance={500}/>
      {/*<Stars radius={100}/>*/}
      <Suspense fallback={null}>
        <SL190/>
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
