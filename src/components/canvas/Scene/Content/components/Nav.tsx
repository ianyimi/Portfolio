import {motion} from "framer-motion";
import {motion as Motion} from "framer-motion-3d";
import styles from "./Nav.module.css";
import {Html} from "@react-three/drei";
import {Vector3} from "three";
import {useStore} from "@/utils/store";
import {useMemo, useRef} from "react";
import {Properties} from "csstype";

export default function Nav(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  
  const activePosition = useRef("Home");
  const {
    currentSection,
    previousSection,
    setCurrentSection,
    progress,
    storyControls,
    animating,
    setAnimationStatus
  } = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    setCurrentSection: state.setCurrentSection,
    progress: state.progress,
    enter: state.enter,
    storyControls: state.storyControls,
    animating: state.animating,
    setAnimationStatus: state.setAnimationStatus,
  }));
  const sceneLoaded = progress === 100;
  
  const htmlPositions: Record<string, Vector3> = {
    Home: new Vector3(2.75, 0.35, -0.25),
    About: new Vector3(1, 1.85, 0),
    Work: new Vector3(0.25, 1.35, 1.5),
    Contact: new Vector3(3.5, 0.1, 0.6)
  };
  
  
  const navHover = {
    scale: 1.2,
    color: "rgba(255, 0, 0, 1)"
  };
  
  const navTap = {
    scale: 0.9
  };
  
  const navAnimate = {
    opacity: sceneLoaded && !animating ? 1 : 0,
    y: sceneLoaded && !animating ? 0 : "-25px",
  };
  
  const colorAnimate = {
    color: currentSection && (currentSection.name === "Work" || currentSection.name === "Contact") ? "white" : "black",
  }
  
  const basicTransition = {
    type: "spring",
    stiffness: 400,
    damping: 17
  };
  
  const navElements = [];
  const navSections = useMemo(() => [
    {name: "Home", poi: 0, delay: 1000},
    {
      name: (!animating && currentSection && currentSection.name === "About") || (animating && previousSection && previousSection.name === "About") ? "Home" : "About",
      poi: 1,
      delay: 0
    },
    {
      name: (!animating && currentSection && currentSection.name === "Work") || (animating && previousSection && previousSection.name === "Work") ? "Home" : "Work",
      poi: 2,
      delay: 0
    },
    {
      name: (!animating && currentSection && currentSection.name === "Contact") || (animating && previousSection && previousSection.name === "Contact") ? "Home" : "Contact",
      poi: 3,
      delay: 0
    },
  ], [currentSection, animating, previousSection]);
  
  for (let i = 1; i < navSections.length; i++) {
    
    const section = navSections[i],
      homeSection = navSections[0];
    const thisButton = section.name === "Home";
    navElements.push(
      <motion.h4
        className={`${styles.navElement}`}
        whileHover={navHover}
        whileTap={navTap}
        animate={{
          ...navAnimate,
          x: `${25 * (i - 1)}px`
        }}
        transition={basicTransition}
        onClick={() => {
          
          setAnimationStatus(true);
          setCurrentSection(thisButton ? homeSection : section);
          
          setTimeout(() => {
            
            storyControls.goToPOI(thisButton ? 0 : section.poi);
            activePosition.current = thisButton ? "Home" : section.name;
            
          }, Math.max(currentSection?.delay || 0, 500));
          
        }}
        key={i}
      >
        <motion.p animate={colorAnimate} transition={{duration: 0.5, delay: 1}}>
          {section.name}
        </motion.p>
      </motion.h4>
    );
    
  }
  
  const navGroupAnimate = useMemo(() => {
    
    const position = htmlPositions[activePosition.current];
    return {
      x: position.x,
      y: position.y,
      z: position.z
    };
    
  }, [activePosition.current]);
  
  const inlineNav = useMemo(() => ({
    
    display: "flex",
    flexDirection: activePosition.current !== "Home" ? "row" : "column",
    
  }), [activePosition.current]);
  
  return (
    <group>
      <Motion.group animate={navGroupAnimate}>
        <Html center>
          <div style={inlineNav as Properties<string | number, string & Record<string, unknown>>}>
            {navElements}
          </div>
        </Html>
        <mesh>
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshBasicMaterial color="blue" visible={viewHelpers}/>
        </mesh>
      </Motion.group>
    </group>
  
  );
  
}
