import {Loader} from "@react-three/drei";
import LoadingScreen from "./components/LoadingScreen";
import {isMobile} from "react-device-detect"
import styles from "./index.module.css";

export default function Overlay() {
  return (
    isMobile ? <div className={styles.mobile}>
      Mobile under Development! Please reconnect on a desktop or tablet.
    </div> : <div>
      {/*<Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>*/}
      <LoadingScreen/>
    </div>
  )
}
