import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import SL190 from "./models/SL190";
import {Suspense} from "react";
import {Stars, Sky} from "@react-three/drei";
import CloudySky from "./components/CloudySky";
import {useStore} from "utils/store";
import shallow from "zustand/shallow";

export default function Environment(props: GroupProps) {
  
  const {skyColor, fog} = useStore(state => ({
    skyColor: state.skyColor,
    fog: state.fog
  }), shallow);
  
  return (
    <group {...props}>
      <ambientLight intensity={1}/>
      <CustomFog color={fog.color} near={fog.near} far={fog.far}/>
      {/*<Sky sunPosition={0.5} distance={500}/>*/}
      
      <CloudySky color={skyColor}/>
      <Suspense fallback={null}>
        <SL190/>
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
