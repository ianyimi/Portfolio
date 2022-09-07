import styles from "./LoadingScreen.module.css";
import {motion} from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      Loading...
      <motion.div className={styles.loadingBar}></motion.div>
    </div>
  )
}
