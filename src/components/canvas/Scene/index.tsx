import {GroupProps} from "@react-three/fiber";
import Camera from "./components/Camera";
import Content from "./components/Content";
import Environment from "./Environment";

export default function Scene(props: GroupProps) {
  
  return (
    <group {...props}>
      <Camera/>
      <Environment/>
      <Content/>
    </group>
  )
  
}
