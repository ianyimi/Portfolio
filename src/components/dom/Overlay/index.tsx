import {Loader} from "@react-three/drei";
import {isMobile} from "react-device-detect"

export default function Overlay() {
  return (
    isMobile ? <div>
      Mobile under Development! Reconnect on desktop for the experience
    </div> : <div>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>
    </div>
  )
}
