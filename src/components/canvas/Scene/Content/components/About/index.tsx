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
  
  const imageAnimate = {
    y: active && !animating ? 0 : "-30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const summaryAnimate = {
    x: active && !animating ? 0 : "30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const basicTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25
  }
  
  return (
    <group>
      <Motion.group animate={aboutGroupAnimate}>
        <mesh>
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshBasicMaterial color="blue" visible={viewHelpers}/>
        </mesh>
        <Html className={styles.htmlDiv} center>
          <motion.div className={styles.container} animate={imageAnimate} transition={basicTransition}>About Me Image
          </motion.div>
          <motion.div className={styles.container} animate={summaryAnimate}
                      transition={{...basicTransition, delay: active ? 0.45 : 0.2}}>About Me
            Summary
          </motion.div>
        </Html>
      </Motion.group>
    </group>
  )
}
