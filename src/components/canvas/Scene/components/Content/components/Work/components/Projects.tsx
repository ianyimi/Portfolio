import {motion, useScroll} from "framer-motion";
import {useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {useLimiter} from "spacesvr";
import {ProjectData} from "../utils/contants";
import PrLabel from "./PrLabel";
import styles from "./Projects.module.css";
import {useRef} from "react";

export default function Projects(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const data = useScroll();
  const projectLabels = [];
  const projectImages = [];
  const images = useRef<HTMLUListElement>(null);
  const labels = useRef<HTMLUListElement>(null);

  for (let i = 0; i < ProjectData.length; i++) {

    projectLabels.push(
      <PrLabel index={i} key={i}/>
    );

  }

  const {scrollY, scrollYProgress} = useScroll({
    container: labels,
    // offset: ["start end", "end start"]
  });

  // useEffect(() => {
  //   if (!scrollY) return;
  scrollY.onChange((latest) => {
    console.log("Page scroll: ", scrollYProgress.get())
  })
  // }, [scrollY])

  const limiter = useLimiter(45);
  useFrame(({clock}) => {

    if (!limiter.isReady(clock)) return;
    // console.log(scrollYProgress)

  });

  return (
    <group position={[0.05, 0.5, 1.05]}>
      {/*<Scroll html>*/}
      <Html center className={styles.htmlDiv}>
        <motion.ul className={styles.labels} ref={labels}>
          {projectLabels}
        </motion.ul>
        <motion.ul className={styles.images}>
          {projectImages}
        </motion.ul>
      </Html>
      {/*</Scroll>*/}
      <mesh>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
        <meshBasicMaterial color="blue" visible={viewHelpers}/>
      </mesh>
    </group>
  );

}
