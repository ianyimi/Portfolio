import {motion as Motion} from "framer-motion-3d";
import {useStore} from "@/utils/store";
import {useRef, useState} from "react";
import * as THREE from "three";
import {GroupProps, useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    LinkedIn?: THREE.Mesh,
    GMail?: THREE.Mesh,
    GitHub?: THREE.Mesh,
    Instagram?: THREE.Mesh,
    Instagram001?: THREE.Mesh,
    Twitter?: THREE.Mesh
  }
  materials: {}
}

export default function Link(props: { index: number, social: any, viewHelpers?: boolean }) {
  
  const {index, social, viewHelpers = false} = props;
  const {nodes, materials} = useGLTF(social.model) as GLTFResult
  const [hover, setHover] = useState(false);
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const mesh = useRef<THREE.Mesh>();
  const active = currentSection && currentSection.name === "Contact";
  
  const groupAnimate = {
    scale: active && !animating ? hover ? 1.25 : 1 : 0,
  }
  const meshAnimate = {
    rotateY: active && !animating ? Math.PI * 4 : 0
  }
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock) || !mesh.current) return;
    mesh.current.rotation.y -= 0.005;
  })
  
  console.log(hover)
  
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
      <Motion.group
        animate={meshAnimate}
        transition={{delay: active ? 0.5 : 0}}
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        // rotation-y={Math.random() * Math.PI}
      >
        <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={social.scaleFactor}>
          <mesh geometry={nodes[social.modelMeshName].geometry} onClick={() => console.log("click")}>
            <meshStandardMaterial color={social.color} side={THREE.DoubleSide}/>
          </mesh>
          {social.modelMeshName === "Instagram" &&
            <mesh geometry={nodes[`${social.modelMeshName}001`].geometry} position={[0, -0.95, 0]}
                  scale={[1, 1.6295, 1]}>
              <meshStandardMaterial color={social.baseColor} side={THREE.DoubleSide}/>
            </mesh>}
        </group>
        <mesh onPointerOver={() => console.log("over")}>
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshStandardMaterial color="blue" visible={viewHelpers}/>
        </mesh>
      </Motion.group>
    </Motion.group>
  )
}
