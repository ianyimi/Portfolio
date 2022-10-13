import {GroupProps} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import AnimatedLogo from "../OuterSpace/utils/svg";

export default function Loader(props: GroupProps) {
  
  return (
    <group {...props}>
      <Html center>
        <AnimatedLogo/>
      </Html>
    </group>
  )
  
}
