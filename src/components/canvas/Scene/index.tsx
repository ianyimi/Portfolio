import {GroupProps} from "@react-three/fiber";
import Camera from "./components/Camera";
import Loader from "./components/Loader";
import Content from "./Content";
import Environment from "./Environment";
import {useEffect} from "react";
import {isMobile} from "react-device-detect";

export default function Scene(props: GroupProps) {
  
  // useEffect(() => {
  //   if (isMobile) window.location.replace("https://ianyimi.carrd.co")
  // }, [])
  
  return (
    <group {...props}>
      <Camera renderOrder={0}/>
      {/*<Loader renderOrder={1}/>*/}
      <Environment renderOrder={2}/>
      <Content renderOrder={3}/>
    </group>
  )
  
}
