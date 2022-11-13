import styles from "./Label.module.css";
import {Project} from "../../utils/contants";
import {motion} from "framer-motion";
import {useStore} from "utils/store";

export default function Label(props: { project: Project }) {
  
  const {project} = props;
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "Work";
  
  const labelInit = {
    x: "-20px",
    opacity: 0
  }
  
  const labelAnimate = {
    x: active && !animating ? 0 : "-20px",
    opacity: active && !animating ? 1 : 0
  }
  
  const basicTransition = {
    delay: active ? 0.3 : 0,
    duration: active ? 0.75 : 0.25
  }
  
  return (
    <motion.div initial={labelInit} animate={labelAnimate} transition={basicTransition} className={styles.labelBorder}>
      <div className={styles.label}>
        <h2><b>{project.name}</b></h2>
        <p className={styles.p}>{project.time}</p>
        <div className={styles.labelLinks}>
          {project.live &&
            <a className={styles.labelLink} href={project.live} target="_blank" rel="noreferrer">Explore</a>}
          {project.src &&
            <a className={styles.labelLink} href={project.src} target="_blank" rel="noreferrer">View Source</a>}
        </div>
      </div>
    </motion.div>
  );
  
}
