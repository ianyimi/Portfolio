import {GroupProps} from "@react-three/fiber";
import Camera from "./components/Camera";
import Content from "./Content";
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
