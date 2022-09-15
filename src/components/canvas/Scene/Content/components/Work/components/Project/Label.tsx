import styles from "./Label.module.css";
import {Project} from "../../utils/contants";

export default function Label(props: { project: Project }) {
  
  const {project} = props;
  
  return (
    <div className={styles.labelBorder}>
      <div className={styles.label}>
        <h2>{project.name}</h2>
        <p className={styles.p}>{project.time}</p>
        <div className={styles.labelLinks}>
          {project.live &&
            <a className={styles.labelLink} href={project.live} target="_blank" rel="noreferrer">Explore</a>}
          {project.src &&
            <a className={styles.labelLink} href={project.src} target="_blank" rel="noreferrer">View Source</a>}
        </div>
      </div>
    </div>
  );
  
}
