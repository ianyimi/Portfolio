import {GroupProps} from "@react-three/fiber";
import EnvironmentHandler from "./components/EnvironmentHandler";
import CustomFog from "./components/CustomFog";
import SL190 from "./models/SL1902";
// import Sl1909v1 from "./models/Sl1909v1";
import {Suspense} from "react";
import {Stars, Sky} from "@react-three/drei";

export default function Environment(props: GroupProps) {
  
  return (
    <group {...props}>
      <ambientLight intensity={0.5}/>
      {/*<spotLight position={[3, 3, 0]} intensity={1} castShadow/>*/}
      {/*<CustomFog color="lightblue" near={75} far={150}/>*/}
      <Sky sunPosition={0.5} distance={500}/>
      {/*<Stars radius={10} fade/>*/}
      <Suspense fallback={null}>
        <SL190/>
        {/*<Sl1909v1/>*/}
        <EnvironmentHandler/>
      </Suspense>
    </group>
  )
  
}
