import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import SL190 from "./models/SL190";
import {Suspense} from "react";
import {Stars, Sky} from "@react-three/drei";
import CloudySky from "./components/CloudySky";
import {useStore} from "utils/store";

export default function Environment(props: GroupProps) {
  
  const fog = useStore(state => state.fog);
  
  return (
    <group {...props}>
      <ambientLight intensity={0.5}/>
      <CustomFog color={fog.color} near={3} far={20}/>
      {/*<Sky sunPosition={0.5} distance={500}/>*/}
      
      <CloudySky/>
      <Suspense fallback={null}>
        <SL190/>
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
