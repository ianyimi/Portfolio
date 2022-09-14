import styles from "./PrImage.module.css";
import {useEffect, useRef} from "react";
import {ProjectData} from "../utils/contants";

export default function PrImage(props: { index: number }) {
  
  const prImage = useRef(null);
  const {index} = props;
  const project = ProjectData[index];
  
  useEffect(() => {
    if (!prImage.current) return;
    prImage.current.style.backgroundImage = `url(${project.img})`
  }, [prImage.current])
  
  return (
    <div className={styles.prImage} ref={prImage}/>
  )
}
