import {motion} from "framer-motion";
import {motion as Motion} from "framer-motion-3d";
import styles from "./Nav.module.css";
import {Html} from "@react-three/drei";
import {Vector3} from "three";
import {useStore} from "@/utils/store";
import {useEffect, useMemo, useRef} from "react";
import {Properties} from "csstype";

type Section = {
  name: string,
  poi: number,
  delay: number
}

export default function Nav(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  
  const activePosition = useRef("Home");
  const {currentSection, setCurrentSection, enter, storyControls, animating, setAnimationStatus} = useStore(state => ({
    currentSection: state.currentSection,
    setCurrentSection: state.setCurrentSection,
    enter: state.enter,
    storyControls: state.storyControls,
    animating: state.animating,
    setAnimationStatus: state.setAnimationStatus,
  }));
  
  const htmlPositions: Record<string, Vector3> = {
    Home: new Vector3(2.75, 0.35, -0.25),
    About: new Vector3(1, 1.85, 0),
    Work: new Vector3(0.25, 1.35, 0),
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
    opacity: !animating ? 1 : 0,
    y: !animating ? 0 : "-25px"
  };
  
  const navElements = [];
  const navSections = [
    {name: "Home", poi: 0, delay: 1000},
    {name: "About", poi: 1, delay: 0},
    {name: "Work", poi: 2, delay: 0},
    {name: "Contact", poi: 3, delay: 0},
  ];
  
  useEffect(() => {
    
    if (!animating) {
      
      for (let i = 1; i < navSections.length; i++) {
        
        const h4: HTMLDivElement = document.getElementsByClassName(styles[`nav${i}`])[0] as HTMLDivElement;
        const section = navSections[i];
        
        if (!h4) return;
        
        // if (currentSection && currentSection.name === "Home") {
        //   h4.style.color = "black"
        // } else if (currentSection) {
        //   h4.style.color = "white"
        // }
        
        if (currentSection && currentSection.name === section.name) {
          
          h4.innerHTML = "Home";
          
        } else if (h4.innerHTML === "Home") {
          
          h4.innerHTML = section.name;
          
        }
        
      }
      
    }
    
  }, [animating]);
  
  for (let i = 1; i < navSections.length; i++) {
    
    const section = navSections[i],
      homeSection = navSections[0];
    const thisButton = currentSection?.name === section.name;
    navElements.push(
      <motion.h4
        className={styles.navElement + " " + styles[`nav${i}`]}
        whileHover={navHover}
        whileTap={navTap}
        animate={{
          ...navAnimate,
          x: `${25 * (i - 1)}px`
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
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
        {section.name}
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
  
  const inlineNav = (horizontal?: boolean) => ({
    
    display: "flex",
    flexDirection: horizontal ? "row" : "column",
    
  });
  
  const horizontalNav = activePosition.current !== "Home";
  return (
    <group>
      <Motion.group animate={navGroupAnimate}>
        <Html center>
          <div style={inlineNav(horizontalNav) as Properties<string | number, string & Record<string, unknown>>}>
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
