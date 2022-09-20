import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import SL190 from "./models/SL190";
import {Suspense} from "react";
import {Stars, Sky} from "@react-three/drei";
import AmbientParticles from "./components/AmbientParticles";
import CloudySky from "./components/CloudySky";

export default function Environment(props: GroupProps) {
  
  return (
    <group {...props}>
      <ambientLight intensity={0.5}/>
      {/*<spotLight position={[3, 3, 0]} intensity={1} castShadow/>*/}
      {/*<CustomFog color="lightblue" near={75} far={150}/>*/}
      <Sky sunPosition={0.5} distance={500}/>
      <AmbientParticles/>
      <CloudySky/>
      {/*<Stars radius={10} fade/>*/}
      <Suspense fallback={null}>
        <SL190/>
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
