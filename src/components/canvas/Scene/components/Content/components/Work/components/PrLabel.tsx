import styles from "./PrLabel.module.css";
import {useRef} from "react";
import {ProjectData} from "../utils/contants";

export default function PrLabel(props: { index: number }) {
  
  const {index} = props;
  const project = ProjectData[index];
  const label = useRef(null);
  
  return (
    <div className={styles.prLabelBorder}>
      <div className={styles.prLabel}>
        {project.name}
      </div>
    </div>
  );
  
}
