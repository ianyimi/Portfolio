import {motion, useScroll} from "framer-motion";
import styles from "./PrLabel.module.css";
import {useEffect, useRef} from "react";

export default function PrLabel(props: { index: number }) {

  const {index} = props;
  // const label = useRef(null);
  const label0 = useRef(null);
  const label1 = useRef(null);
  const label2 = useRef(null);
  const label3 = useRef(null);
  const labelRefs = [label0, label1, label2, label3];
  const currentLabel = labelRefs[index];

  const {scrollY, scrollYProgress} = useScroll({
    target: currentLabel,
    offset: ["end end", "start start"]
  });
  const prLabelAnimate = {
    opacity: Math.sin(Math.PI * scrollYProgress.get())
  }


  // const limiter = useLimiter(45);
  // useFrame(({clock}) => {
  //   if (!limiter.isReady(clock)) return;
  //   index === 2 && console.log(Math.sin(Math.PI * scrollYProgress.get()))
  // })

  // scrollY.onChange(l => console.log(l.get()));

  useEffect(() => {
    if (!currentLabel.current) return;
    scrollYProgress.onChange((currentY: number) => {
      prLabelAnimate.opacity = Math.sin(Math.PI * currentY)
    })

  }, [currentLabel.current])


  return (
    <motion.li
      animate={prLabelAnimate}
      ref={currentLabel}
      className={styles.prLabelBorder}
    >
      <div className={styles.prLabel}>
        Project Label
      </div>
    </motion.li>
  );

}
