import React, {useMemo, useRef} from "react";
import {GroupProps, useLoader} from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { useWorld } from "../WorldState";
import {Object3D, Vector3} from "three";
import * as THREE from "three";

const FONT = "https://dqeczc7c9n9n1.cloudfront.net/fonts/Thunderstorm.otf";

export default function Title(props: { position?: [number, number, number] } & GroupProps) {

  const { position = [0, 0, 0] } = props;
  const brand = useRef();
  const light = useRef();
  const colorIndex = 1;

  const font = useLoader(THREE.FontLoader, "/fonts/Thunderstormttf.json");


  const size = 0.25
  const config = useMemo(() => ({
    font: font,
    // size: size,
    // height: size/10,
    // curveSegments: 32,
    // bevelEnabled: true,
    // bevelThickness: 0.2,
    // bevelSize: 0.1,
    // bevelOffset: 0.1,
    // bevelSegments: 32
  }), [font])

  return (
    <group {...props} position={position}>
      <Text
        font={FONT}
        color="white"
        fontSize={0.25}
        maxWidth={1}
        ref={brand}
      >
        Out Of Time
      </Text>
      {/*<mesh ref={brand}>*/}
      {/*  <textBufferGeometry args={["Out Of Time", config]} />*/}
      {/*  <meshStandardMaterial metalness={0.2} roughness={0.3} color="white" />*/}
      {/*</mesh>*/}
      <ambientLight ref={light} />
      <EffectComposer
        multisampling={0}
        disableNormalPass
      >
        <SelectiveBloom
          lights={[light]}
          selection={[brand]}
          luminanceThreshold={0.25}
          bloomRadius={0.05}
        />
      </EffectComposer>
    </group>
  )
}
