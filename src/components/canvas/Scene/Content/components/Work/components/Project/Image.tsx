import styles from "./Image.module.css";
import {useEffect, useRef} from "react";
import {Project} from "../../utils/contants";

export default function Image(props: { project: Project }) {

  const prImage = useRef(null);
  const {project} = props;

  useEffect(() => {
    if (!prImage.current) return;
    prImage.current.style.backgroundImage = `url(${project.img})`
  }, [prImage.current])

  return (
    <img className={styles.image} src={project.img}/>
  )
}
