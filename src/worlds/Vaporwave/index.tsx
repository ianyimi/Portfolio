import { Spinning, Floating, StandardEnvironment, Fog } from "spacesvr";
import TransparentFloor from "../../ideas/TransparentFloor";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import Camera from "../components/Camera";
import Floor from "../components/TiltFloor";
import Landscape from "./components/Landscape";
import Lights from "./components/Lights";
import WorldState from "./components/WorldState";
import MatrixSky from "./components/MatrixSky";
import Works from "./components/Works";
import PostProcessing from "./components/PostProcessing";
import * as THREE from "three";

export default function Vaporwave() {
  return (
    <Canvas>
      <Physics gravity={[0, -0.1, 0]}>
        {/*<Debug scale={1} color="red">*/}
          <WorldState>
            <ambientLight />
            <Camera />
            <Landscape />
            {/*<fog attach="fog" args={["#000000", 1, 2.5]} />*/}
            <Lights />

            <Works />
            <PostProcessing />
          </WorldState>
        {/*</Debug>*/}
      </Physics>
    </Canvas>
  );
}
