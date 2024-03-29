import {GroupProps} from "@react-three/fiber";
import Camera from "./components/Camera";
import Content from "./Content";
import Environment from "./Environment";

export default function Scene(props: GroupProps) {
  
  return (
    <group {...props}>
      <Camera renderOrder={0}/>
      {/*<Loader renderOrder={1}/>*/}
      <Environment renderOrder={2}/>
      <Content renderOrder={3}/>
    </group>
  )
  
}
