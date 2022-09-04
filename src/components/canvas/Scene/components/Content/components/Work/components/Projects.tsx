import {useScroll} from "framer-motion";
import {useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {useLimiter} from "spacesvr";
import {ProjectData} from "../utils/contants";
import Project from "./Project";
import styles from "./Projects.module.css";

export default function Projects(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  const data = useScroll();
  const projects = [];
  
  for (let i = 0; i < ProjectData.length; i++) {
    
    projects.push(
      <Project index={i} key={i}/>
    );
    
  }
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    
    if (!limiter.isReady(clock)) return;
    
  });
  
  return (
    <group position={[0.25, 1, 1.35]}>
      {/*<Scroll html>*/}
      <Html center>
        <div className={styles.projects}>
          {projects}
        </div>
      </Html>
      {/*</Scroll>*/}
      <mesh>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
        <meshBasicMaterial color="blue" visible={viewHelpers}/>
      </mesh>
    </group>
  );
  
}
