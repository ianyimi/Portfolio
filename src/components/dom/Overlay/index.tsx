import {Loader} from "@react-three/drei";
import {isMobile} from "react-device-detect"
import styles from "./index.module.css";

export default function Overlay() {
  return (
    isMobile ? <div className={styles.mobile}>
      <p>Mobile under Development!</p>
      <p>Reconnect on desktop for the experience</p>
    </div> : <div>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>
    </div>
  )
}
