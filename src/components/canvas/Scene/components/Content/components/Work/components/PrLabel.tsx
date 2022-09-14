import styles from "./PrLabel.module.css";
import {useRef} from "react";

export default function PrLabel(props: { index: number }) {

  const {index} = props;
  const label = useRef(null);

  return (
    <div className={styles.prLabelBorder}>
      <div className={styles.prLabel}>
        Project Label {index}
      </div>
    </div>
  );

}
