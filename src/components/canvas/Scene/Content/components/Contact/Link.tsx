import {motion as Motion} from "framer-motion-3d";
import {useStore} from "utils/store";
import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";
import {Html, useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./Link.module.css";

type GLTFResult = GLTF & {
  nodes: {
    LinkedIn?: THREE.Mesh,
    GMail?: THREE.Mesh,
    GitHub?: THREE.Mesh,
    Instagram?: THREE.Mesh,
    Instagram001?: THREE.Mesh,
    Twitter?: THREE.Mesh
  }
  materials: {
    Gradient: THREE.MeshStandardMaterial
  }
}

export default function Link(props: { index: number, social: any, viewHelpers?: boolean }) {
  
  const {index, social, viewHelpers = false} = props;
  
  const {currentSection, previousSection, animating, objectQueued, objectRendered} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered
  }));
  objectQueued(social.modelMeshName);
  const active = currentSection && currentSection.name === "Contact";
  
  const {nodes, materials} = useGLTF(social.model) as GLTFResult
  const [hover, setHover] = useState(false);
  const click = useRef<HTMLDivElement>(null);
  const floatGroup = useRef<THREE.Group>();
  
  
  useEffect(() => {
    
    objectRendered(social.modelMeshName)
    
  }, [nodes]);
  
  const groupAnimate = {
    scale: active && !animating ? hover ? 1.25 : 1 : 0,
  }
  const meshAnimate = {
    rotateY: active && !animating ? Math.PI * 4 : 0
  }
  
  const handleClick = () => {
    if (!active || animating) return;
    window.open(social.href, "_blank");
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
    floatGroup.current.rotation.y = (Math.sin((t / 4) * speed) / 8) * rotationIntensity;
    floatGroup.current.rotation.z = (Math.sin((t / 4) * speed) / 20) * rotationIntensity;
    let yPosition = (Math.sin((t / 4) * speed) / 10);
    yPosition = THREE.MathUtils.mapLinear(yPosition, -0.1, 0.1, floatingRange?.[0] ?? -0.1, floatingRange?.[1] ?? 0.1) - 0.075;
    floatGroup.current.position.y = yPosition * floatIntensity;
    
  });
  
  return (
    <Motion.group
      animate={groupAnimate}
      position={social.pos}
      key={index}
      transition={{
        type: "tween",
        mass: 3,
        stiffness: 100,
        damping: 50,
        delay: active ? 0.5 : 0,
        restDelta: 0.0001
      }}
    >
      <group ref={floatGroup}>
        <Motion.group
          animate={meshAnimate}
          transition={{delay: active ? 0.5 : 0}}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={social.scaleFactor}>
            <mesh
              geometry={nodes[social.modelMeshName].geometry}
              onClick={() => console.log("click")}
              castShadow
              receiveShadow
            >
              <meshStandardMaterial color={social.color} side={THREE.DoubleSide}/>
            </mesh>
            {social.modelMeshName === "Instagram" &&
              <mesh
                name="Instagram001"
                geometry={nodes.Instagram001.geometry}
                material={materials.Gradient}
                scale={1}
              />
            }
          </group>
          <Html center>
            <div
              className={styles.clickContainer}
              onClick={handleClick}
              ref={click}
              style={{cursor: active && !animating ? "pointer" : "default"}}
            />
          </Html>
        </Motion.group>
      </group>
    </Motion.group>
  )
}
