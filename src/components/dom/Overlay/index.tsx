import {Loader} from "@react-three/drei";
import LoadingScreen from "./components/LoadingScreen";
import styles from "./index.module.css";

export default function Overlay() {
  return (
    <div>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>
    </div>
  )
}
