import Visualizer from "./Visualizer";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { AudioAnalyser } from "three";
import Sound from "./Sound"

type AudioProps = {
  mute?: boolean,
  volume?: number,
  reverse?: boolean
} & GroupProps

export default function Audio(props: AudioProps) {

  const { mute, volume, reverse, ...restProps } = props;
  const [aa, setAa] = useState<AudioAnalyser>();

  return (
    <group {...restProps}>
      <Sound
        url="https://dqeczc7c9n9n1.cloudfront.net/audio/3320+Biggs+-+Get+Busy+(Prodigy+Master).mp3"
        setAudioAnalyser={setAa}
        volume={mute ? 0 : volume ? volume : 1}
      />
      {aa && <Visualizer
        position={[0, 0, -1.25]}
        radius={0.5}
        reverse={reverse}
        barCount={64}
        aa={aa}
        index={1}
      />}
    </group>
  )
}
