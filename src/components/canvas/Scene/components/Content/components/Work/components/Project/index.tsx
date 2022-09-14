import Label from "./Label";
import Image from "./Image";
import {ProjectData} from "../../utils/contants";
import styles from "./index.module.css";
import {useSwiperSlide} from "swiper/react";
import {motion} from "framer-motion";

export default function Project(props: { index: number }) {

  const {index} = props;
  const project = ProjectData[index];
  const swiperSlide = useSwiperSlide();

  const projectAnimate = {
    opacity: swiperSlide.isActive ? 1 : 0.75
  }

  return (
    <motion.div animate={projectAnimate} className={styles.prContainer}>
      <Label project={project}/>
      <Image project={project}/>
    </motion.div>
  )
}
