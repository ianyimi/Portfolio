import {motion, useScroll} from "framer-motion";
import {useRef} from "react";
import styles from "./Project.module.css";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";

export default function Project(props: { index: number }) {
  
  const {index} = props;
  const ref = useRef(null);
  
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock)) return;
    index === 2 && console.log(Math.sin(Math.PI * scrollYProgress.get()))
  })
  
  // scrollY.onChange( l => console.log( l ) );
  
  return (
    <div ref={ref} className={styles.project}>
      Project
    
    </div>
  );
  
}
