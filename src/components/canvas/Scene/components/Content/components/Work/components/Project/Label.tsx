import styles from "./Label.module.css";
import {useRef} from "react";
import {Project} from "../../utils/contants";

export default function Label(props: { project: Project }) {

  const {project} = props;
  const label = useRef(null);

  return (
    <div className={styles.labelBorder}>
      <div className={styles.label}>
        <h2>{project.name}</h2>
        <br/>
        <div className={styles.labelLinks}>
          <a className={styles.labelLink} href={project.live} target="_blank" rel="noreferrer">Live</a>
          <a className={styles.labelLink} href={project.src} target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    </div>
  );

}
