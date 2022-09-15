import {Html} from "@react-three/drei";
import {ProjectData} from "../utils/contants";
import Project from "./Project";
import styles from "./Projects.module.css";
import {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Controller, EffectCards, EffectFlip, Mousewheel, Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Projects(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const projects = [];

  const swiper1Ref = useRef<any>();
  const swiper2Ref = useRef<any>();

  useEffect(() => {
    if (!swiper1Ref.current || !swiper2Ref.current) return;
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, [swiper1Ref.current, swiper2Ref.current]);

  for (let i = 0; i < ProjectData.length; i++) {

    projects.push(
      <SwiperSlide>
        <Project index={i} key={i}/>
      </SwiperSlide>
    )

  }

  return (
    <group position={[0.05, 0.5, 1.05]}>
      <Html center className={styles.htmlDiv}>
        <Swiper
          className={styles.labels}
          modules={[Controller, Mousewheel, EffectCards, EffectFlip, Pagination, Navigation, Autoplay, A11y]}
          onSwiper={(swiper) => {
            swiper1Ref.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7000,
            pauseOnMouseEnter: true
          }}
          cardsEffect={{
            slideShadows: false,
          }}
          a11y={{enabled: true}}
          loopedSlides={ProjectData.length - 1}
          effect="cards"
          slidesPerView="auto"
          direction="vertical"
          speed={500}
          centeredSlides
          observer
          navigation
          mousewheel
          loop
        >
          {projects}
        </Swiper>
      </Html>
      <mesh>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
        <meshBasicMaterial color="blue" visible={viewHelpers}/>
      </mesh>
    </group>
  );

}
