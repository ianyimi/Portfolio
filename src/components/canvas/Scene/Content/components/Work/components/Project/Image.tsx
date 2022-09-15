import styles from "./Image.module.css";
import {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {Project} from "../../utils/contants";
import {useStore} from "@/utils/store";

export default function Image(props: { project: Project }) {

  const prImage = useRef(null);
  const {project} = props;
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "Work";

  useEffect(() => {
    if (!prImage.current) return;
    prImage.current.style.backgroundImage = `url(${project.img})`
  }, [prImage.current])

  const imageInit = {
    x: "20px",
    opacity: 0,
  }

  const imageAnimate = {
    x: active && !animating ? 0 : "20px",
    opacity: active && !animating ? 1 : 0
  }

  const basicTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25
  }

  return (
    <motion.img
      className={styles.image}
      src={project.img}
      initial={imageInit}
      animate={imageAnimate}
      transition={basicTransition}
    />
  )
}
