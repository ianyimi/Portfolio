import LoadingScreen from "./components/LoadingScreen";
import {Loader} from "@react-three/drei";

export default function Overlay() {
  return (
    <div>
      {/*<LoadingScreen/>*/}
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>
    </div>
  )
}
