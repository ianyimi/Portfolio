import {motion as Motion} from "framer-motion-3d";
import {Html} from "@react-three/drei";
import {motion} from "framer-motion";
import {useStore} from "@/utils/store";
import styles from "./index.module.css";
import {INTERESTS} from "./constants";
import Interest from "./Interest";
import ProfileCard from "./ProfileCard";

export default function About(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "About";
  
  const interests = [];
  for (let i = 0; i < INTERESTS.length; i++) {
    interests.push(
      <Interest data={INTERESTS[i]} index={i} key={i}/>
    )
  }
  
  const groupAnimate = {
    x: -10,
    y: active || (previousSection && previousSection.name === "About" && animating) ? -7 : -20,
    z: -5
  };
  
  const profileAnimate = {
    scale: active && !animating ? 1 : 0
  }
  
  const bioImageAnimate = {
    y: active && !animating ? 0 : "-30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const bioSummaryAnimate = {
    y: active && !animating ? 0 : "30px",
    opacity: active && !animating ? 1 : 0
  }
  
  const basicTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25,
    when: "beforeChildren",
    staggerChildren: 0.5
  }
  
  return (
    <group>
      <Motion.group animate={groupAnimate}>
        {interests}
        <group position={[15, -1, 0]}>
          <Motion.group animate={profileAnimate} transition={basicTransition}>
            <ProfileCard position={[0, -4, 0]} rotation={[-0.625, -Math.PI / 5, -0.515]}/>
          </Motion.group>
          <Html position={[-0.25, -5.5, 0]} center>
            <motion.div
              className={styles.cardBorder}
              animate={bioSummaryAnimate}
              transition={basicTransition}
            >
              <div className={styles.cardContent}>
                I am Isaiah Anyimi, not only a react developer. Here are some other things I often partake in
                while not building something new.
              </div>
            </motion.div>
          </Html>
        </group>
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]}/>
          <meshBasicMaterial color="blue" visible={viewHelpers}/>
        </mesh>
      </Motion.group>
    </group>
  )
}
