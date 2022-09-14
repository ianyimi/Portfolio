import Label from "./Label";
import Image from "./Image";
import {ProjectData} from "../../utils/contants";
import styles from "./index.module.css";

export default function Project(props: { index: number }) {

  const {index} = props;
  const project = ProjectData[index];

  return (
    <div className={styles.prContainer}>
      <Label project={project}/>
      <Image project={project}/>
    </div>
  )
}
