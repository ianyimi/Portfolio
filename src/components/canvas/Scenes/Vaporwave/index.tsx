import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import Camera from "../components/Camera";
import Overlay from "./components/Overlay";
import {Suspense} from "react";
import {Landscape, Loader} from "./components";

export default function Vaporwave() {
  
  return (
    <group>
      {/*<Overlay/>*/}
      <Physics gravity={[0, -0.1, 0]}>
        {/*<Debug scale={1} color="red">*/}
        <Suspense fallback={null}>
          <Camera/>
          <Landscape/>
          {/*<PostProcessing/>*/}
        </Suspense>
        {/*</Debug>*/}
      </Physics>
    </group>
  );
  
}
