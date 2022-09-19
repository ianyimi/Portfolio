import {motion} from "framer-motion";
import {motion as Motion} from "framer-motion-3d";
import {useStore} from "@/utils/store";
import Brazuca from "./models/Brazuca";
import Eth from "./models/Eth";
import Headphones from "./models/Headphones";
import Meramera from "./models/Meramera";
import * as THREE from "three";
import {useRef} from "react";
import {useLimiter} from "spacesvr";
import {useFrame} from "@react-three/fiber";
import {Float, Html} from "@react-three/drei";
import styles from "./Interest.module.css";

export default function Interest(props: { data: Record<string, any>, index: number }) {
  
  const {data, index} = props;
  const floatGroup = useRef<THREE.Group>();
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "About";
  const right = index % 2 === 0;
  const htmlX = right ? 0.275 : -0.275;
  
  const groupAnimate = {
    scale: active && !animating ? 1 : 0
  }
  
  const groupSpinAnimate = {
    rotateY: active && !animating ? 2 * Math.PI : 0,
  }
  
  const basicTransition = {
    duration: active ? 0.5 : 0.25,
    delay: active ? index * 0.1 : -index * 0.1
  }
  
  const htmlAnimate = {
    opacity: active && !animating ? 1 : 0,
  }
  
  // Float Link - sourced from Drei Float component
  const speed = 2;
  const rotationIntensity = 1;
  const floatIntensity = 1;
  const floatingRange = [0, 0.015];
  const offset = useRef(Math.random() * 10000);
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    
    if (!limiter.isReady(clock) || !floatGroup.current) return;
    
    const t = offset.current + clock.getElapsedTime();
    floatGroup.current.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
    floatGroup.current.rotation.z = (Math.sin((t / 4) * speed) / 20) * rotationIntensity;
    let yPosition = (Math.sin((t / 4) * speed) / 10);
    yPosition = THREE.MathUtils.mapLinear(yPosition, -0.1, 0.1, floatingRange?.[0] ?? -0.1, floatingRange?.[1] ?? 0.1) - 0.075;
    floatGroup.current.position.y = yPosition * floatIntensity;
    floatGroup.current.rotation.y += 0.01;
    
  });
  
  return (
    <group position={data.pos}>
      <Motion.group animate={groupAnimate} transition={basicTransition}>
        {/* @ts-ignore*/}
        <Motion.group animate={groupSpinAnimate} transition={basicTransition} ref={floatGroup}>
          {data.id === 0 && <Eth color={data.color} scale={data.scaleFactor}/>}
          {data.id === 1 && <Headphones scale={data.scaleFactor}/>}
          {data.id === 2 && <Brazuca scale={data.scaleFactor}/>}
          {data.id === 3 && <Meramera scale={data.scaleFactor}/>}
        </Motion.group>
        <group position={[htmlX, 0, 0]}>
          <Html center>
            <motion.div animate={htmlAnimate} transition={basicTransition} className={styles.htmlDivBorder}>
              <div className={styles.htmlDiv}>
                <h3 className={styles.subjectLine}>{data.subject}</h3>
                <p className={styles.info}>{data.info}</p>
              </div>
            </motion.div>
          </Html>
        </group>
      </Motion.group>
    </group>
  )
  
}
