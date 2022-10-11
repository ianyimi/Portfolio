import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import Audi from "./models/Audi";
import Spaceship from "./models/Spaceship";
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
      <Sky sunPosition={0}/>
      <CustomFog color={fog.color} near={fog.near} far={fog.far}/>
      {/*<CloudySky color={skyColor}/>*/}
      <Suspense fallback={null}>
        {/*<Audi/>*/}
        <Spaceship/>
        {/*<SL190/>*/}
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
