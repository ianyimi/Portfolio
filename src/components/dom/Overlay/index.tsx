import {Loader} from "@react-three/drei";
import LoadingScreen from "./components/LoadingScreen";
import {isMobile} from "react-device-detect"
import styles from "./index.module.css";

export default function Overlay() {
  if (isMobile) window.open("https://ianyimi.carrd.co");
  return (
    <div>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>
    </div>
  )
}
