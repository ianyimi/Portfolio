import { Spinning, Floating, StandardEnvironment, Fog } from "spacesvr";
import TransparentFloor from "../../ideas/TransparentFloor";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import Camera from "../components/Camera";
import Floor from "../components/TiltFloor";
import Landscape from "./components/Landscape";
import WorldState from "./components/WorldState";
import Works from "./components/Works";
import PostProcessing from "./components/PostProcessing";
import * as THREE from "three";
import Overlay from "./components/Overlay";

export default function Vaporwave() {
  return (
    <body>
      <Overlay />
      <Canvas>
        <Physics gravity={[0, -0.1, 0]}>
          {/*<Debug scale={1} color="red">*/}
          <WorldState>
            <Camera />
            <Landscape />
            <Works />
            {/*<PostProcessing />*/}
          </WorldState>
          {/*</Debug>*/}
        </Physics>
      </Canvas>
    </body>
  );
}
