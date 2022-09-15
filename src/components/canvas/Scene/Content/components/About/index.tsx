import {motion as Motion} from "framer-motion-3d";
import {Html} from "@react-three/drei";
import {motion} from "framer-motion";
import {useStore} from "@/utils/store";

export default function About(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;

  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "About";

  const aboutGroupAnimate = {
    x: 1.5,
    y: !active && !animating ? 5 : 1.5,
    z: 0
  };

  return (
    <group>
      <Motion.group animate={aboutGroupAnimate}>
        <mesh>
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshBasicMaterial color="blue" visible={viewHelpers}/>
        </mesh>
        <Html center>
          <motion.div></motion.div>
        </Html>
      </Motion.group>
    </group>
  )
}
