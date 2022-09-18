import {motion as Motion} from "framer-motion-3d";
import {Html} from "@react-three/drei";
import {motion} from "framer-motion";
import {useStore} from "@/utils/store";
import styles from "./index.module.css";

export default function About(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "About";
  
  const aboutGroupAnimate = {
    x: 1,
    y: active || (previousSection && previousSection.name === "About" && animating) ? 1.2 : 3,
    z: -0.25
  };
  
  const summaryAnimate = {
    x: active && !animating ? 0 : "30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const basicTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25,
    when: "beforeChildren",
    staggerChildren: 0.3
  }
  
  const bioImageAnimate = {
    y: active && !animating ? 0 : "-30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const bioSummaryAnimate = {
    y: active && !animating ? 0 : "30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const subjectContainerAnimate = {
    opacity: active || (previousSection && previousSection.name === "About" && animating) ? 1 : 0,
  }
  
  const subjectContainerTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25,
    when: "beforeChildren",
    staggerChildren: 0.3
  }
  
  const subjectAnimateLeft = {
    opacity: active && !animating ? 1 : 0,
    x: active && !animating ? 0 : "30px"
  }
  
  const subjectAnimateRight = {
    opacity: active && !animating ? 1 : 0,
    x: active && !animating ? 0 : "-30px"
  }
  
  return (
    <group>
      <Motion.group animate={aboutGroupAnimate}>
        <mesh>
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshBasicMaterial color="blue" visible={viewHelpers}/>
        </mesh>
        <Html className={styles.htmlDiv} center>
          <motion.div
            className={styles.container}
          >
            <motion.div
              // className={styles.}
              animate={bioImageAnimate}
              transition={basicTransition}
            >
              About Me Image
            </motion.div>
            <motion.div
              animate={bioSummaryAnimate}
              transition={basicTransition}
            >
              About Me Summary
            </motion.div>
          </motion.div>
          <motion.ul
            className={styles.container}
          >
            <motion.li animate={subjectAnimateLeft}>NFT</motion.li>
            <motion.li animate={subjectAnimateRight}>Music</motion.li>
            <motion.li animate={subjectAnimateLeft}>Soccer</motion.li>
            <motion.li animate={subjectAnimateRight}>Anime</motion.li>
          </motion.ul>
        </Html>
      </Motion.group>
    </group>
  )
}
