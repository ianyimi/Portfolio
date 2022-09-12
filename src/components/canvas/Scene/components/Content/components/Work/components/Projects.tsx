import {useScroll} from "framer-motion";
import {useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {useLimiter} from "spacesvr";
import {ProjectData} from "../utils/contants";
import Project from "./Project";
import styles from "./Projects.module.css";
import {useRef} from "react";

export default function Projects(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const data = useScroll();
  const projectLabels = [];
  const projectImages = [];
  const images = useRef<HTMLDivElement>(null);
  const labels = useRef<HTMLDivElement>(null);

  for (let i = 0; i < ProjectData.length; i++) {

    projectLabels.push(
      <Project index={i} key={i}/>
    );

  }

  const limiter = useLimiter(45);
  useFrame(({clock}) => {

    if (!limiter.isReady(clock)) return;

  });

  return (
    <group position={[0.05, 0.5, 1.05]}>
      {/*<Scroll html>*/}
      <Html center className={styles.htmlDiv}>
        <div className={styles.labels} ref={labels}>
          {projectLabels}
        </div>
        <div className={styles.images}>
          {projectImages}
        </div>
      </Html>
      {/*</Scroll>*/}
      <mesh>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
        <meshBasicMaterial color="blue" visible={viewHelpers}/>
      </mesh>
    </group>
  );

}
