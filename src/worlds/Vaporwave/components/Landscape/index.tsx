import { useLimiter, Fog } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, {useRef, useState} from "react";
import Terrain from "./Terrain";
import { useWorld } from "../WorldState";
import { usePlane } from "@react-three/cannon";
import Audio from "../Audio";
import * as THREE from "three";
import { AudioAnalyser } from "three";
import AudioVisualizer from "./AudioVisualizer";
import Lights from "./Lights";
import AmbientParticles from "./AmbientParticles";
import Title from "./Title";

const AUDIO = "https://dqeczc7c9n9n1.cloudfront.net/audio/The+Weeknd+-+Out+of+Time+(Official+Video).mp3";
const AUDIO2 = "https://dqeczc7c9n9n1.cloudfront.net/audio/DND-+Kanye+west.mp3";

export default function Index() {
  const terrain1Ref = useRef();
  const terrain2Ref = useRef();

  const { palette, aa, setAa, getVolume } = useWorld();
  const colorIndex = 3;
  // const [aa, setAa] = useState<AudioAnalyser>();

  const [collider, api] = usePlane(() => ({
    args: [2, 5],
    rotation: [-Math.PI * 0.5, 0, 0],
    type: "Static"
  }))

  const limiter = useLimiter(30);
  useFrame(({ clock }, delta) => {
    if (!limiter.isReady || !terrain1Ref.current || !terrain2Ref.current) return;
    const volume = getVolume(aa?.getFrequencyData())
    const speed = volume > 0.6 ?
      0.5 : volume > 0.3 ?
        1 : 1.5;
    // console.log(`VOL: ${volume} - LEVEL: ${speed}`)

    // @ts-ignore
    terrain1Ref.current.position.z += delta/(5*(aa ? speed : 1.5));
    // @ts-ignore
    terrain2Ref.current.position.z += delta/(5*(aa ? speed : 1.5));

    // @ts-ignore
    if (terrain1Ref.current.position.z >= 2) {
      // @ts-ignore
      terrain1Ref.current.position.z = 0;
    }
    // @ts-ignore
    if (terrain2Ref.current.position.z >= 0) {
      // @ts-ignore
      terrain2Ref.current.position.z = -2;
    }
  });

  return (
    <group>
      <Audio url={AUDIO} setAudioAnalyser={setAa} />
      <Fog color={new THREE.Color(palette[colorIndex])} near={1} far={2} />
      <Lights />
      {/*<Title position={[0, 0.5, -0.5]} />*/}
      <group ref={terrain1Ref}>
        <Terrain />
        <AmbientParticles />
        <AudioVisualizer
          radius={0.5}
          barCount={64}
          index={1}
        />
      </group>
      <group ref={terrain2Ref}>
        <Terrain />
        <AmbientParticles />
        <AudioVisualizer
          radius={0.5}
          barCount={64}
          index={1}
          reverse
        />
      </group>
      <mesh name="skybox">
        <boxBufferGeometry args={[10, 10, 10]} />
        <meshStandardMaterial
          color={new THREE.Color(palette[colorIndex])}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh name="ground" ref={collider}>
        <planeBufferGeometry attach="geometry" args={[2, 5, 24, 24]} />
        <meshBasicMaterial visible={false} />
      </mesh>
    </group>
  );
};
