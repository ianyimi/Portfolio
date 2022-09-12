import {motion, useScroll} from "framer-motion";
import {useRef} from "react";
import styles from "./Project.module.css";

export default function Project(props: { index: number }) {

  const {index} = props;
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // const limiter = useLimiter(45);
  // useFrame(({clock}) => {
  //   if (!limiter.isReady(clock)) return;
  //   index === 2 && console.log(Math.sin(Math.PI * scrollYProgress.get()))
  // })

  // scrollYProgress.onChange(l => console.log(l));

  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} ref={ref} className={styles.projectBorder}>
      <div className={styles.project}>
        Project
      </div>
    </motion.div>
  );

}
