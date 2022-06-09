import { useEffect, useMemo, useState } from "react";
import { GroupProps, useThree } from "@react-three/fiber";
import { AudioAnalyser, Vector3, AudioListener, Audio } from "three";

type SoundProps = {
  url: string;
  volume?: number;
  setAudioAnalyser?: (aa: AudioAnalyser) => void;
  fftSize?: 64 | 128 | 256 | 512 | 1024;
} & GroupProps;

export default function Sound(props: SoundProps) {
  const {
    url,
    volume = 1,
    setAudioAnalyser,
    fftSize = 128,
    ...rest
  } = props;

  const [speaker, setSpeaker] = useState<Audio>();
  const camera = useThree((state) => state.camera);

  const audio = useMemo(() => {
    const a = document.createElement("audio");
    a.src = url;
    a.autoplay = false;
    a.preload = "auto";
    a.crossOrigin = "Anonymous";
    a.loop = true;
    return a;
  }, []);

  useEffect(() => {
    const setupAudio = () => {
      if (!audio.paused && !speaker) {
        const listener = new AudioListener();
        camera.add(listener);

        const speak = new Audio(listener);
        speak.setMediaElementSource(audio);
        speak.setVolume(volume);

        if (setAudioAnalyser) {
          setAudioAnalyser(new AudioAnalyser(speak, fftSize));
        }

        setSpeaker(speak);
      }
    };

    const playAudio = () => audio.play().then(() => setupAudio());

    if (audio) {
      audio.setAttribute("src", url);
      audio.play().then(() => setupAudio());
      document.addEventListener("click", playAudio);
      return () => {
        document.removeEventListener("click", playAudio);
      };
    }
  }, [speaker, audio, url]);

  useEffect(() => {
    if (!speaker) return;

    speaker.setVolume(volume);
  }, [volume]);

  return (
    <group name="spacesvr-audio" {...rest}>
      {speaker && <primitive object={speaker} />}
    </group>
  );
}

