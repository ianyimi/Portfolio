import {useStore} from "utils/store";
import {motion as Motion} from "framer-motion-3d";
import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";

const SOCIALS = [
  {pos: [3.25, 1.5, 1.25], src: "https://www.linkedin.com/in/isaiah-anyimi-b3a66b165"},
  {pos: [3.25, 1.5, 0], src: "https://github.com/ianyimi"},
  {pos: [3.25, 0.9, 0.625], src: "mailto:anyiminene@gmail.com"},
  {pos: [3.25, 0.5, 1.75], src: "https://www.instagram.com/yonkozay/"},
  {pos: [3.25, 0.5, -0.5], src: "https://twitter.com/YonkoZay_"}
];

export default function Contact(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const link = useRef<THREE.Mesh>();
  const link2 = useRef<THREE.Mesh>();
  const link3 = useRef<THREE.Mesh>();
  const link4 = useRef<THREE.Mesh>();
  const link5 = useRef<THREE.Mesh>();
  const links = [link, link2, link3, link4, link5];
  const active = currentSection && currentSection.name === "Contact";
  const meshes = [];

  const groupAnimate = {
    scale: active && !animating ? 1 : 0,
  }
  const meshAnimate = {
    rotateY: active && !animating ? Math.PI * 4 : 0
  }

  for (let i = 0; i < SOCIALS.length; i++) {
    meshes.push(
      <Motion.group
        animate={groupAnimate}
        position={SOCIALS[i].pos}
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 1000,
          damping: 50,
          delay: active ? 0.5 : 0,
          restDelta: 0.0001
        }}
      >
        <Motion.mesh
          animate={meshAnimate}
          transition={{delay: active ? 0.5 : 0}}
          ref={links[i]}
          rotation-y={Math.random() * Math.PI}
        >
          <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
          <meshStandardMaterial color="blue" visible={viewHelpers}/>
        </Motion.mesh>
      </Motion.group>
    )
  }

  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock)) return;
    for (const link of links) {
      if (!link.current) continue;
      link.current.rotation.y -= 0.005
    }
  })

  const contactGroupAnimate = {
    x: 0,
    y: 0,
    z: 0,
  }

  return (
    <Motion.group animate={contactGroupAnimate}>
      {meshes}
    </Motion.group>
  )
}
