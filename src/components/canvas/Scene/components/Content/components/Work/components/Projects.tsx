import {useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {useLimiter} from "spacesvr";
import {ProjectData} from "../utils/contants";
import PrLabel from "./PrLabel";
import PrImage from "./PrImage";
import styles from "./Projects.module.css";
import {useLayoutEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Controller, Mousewheel, Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Projects(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const projectLabels = [];
  const projectImages = [];
  const images = useRef<any>(null);
  const labels = useRef<any>(null);

  const swiper1Ref = useRef<any>();
  const swiper2Ref = useRef<any>();

  useLayoutEffect(() => {
    if (!swiper1Ref.current || !swiper2Ref.current) return;
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, [swiper1Ref.current, swiper2Ref.current]);

  for (let i = 0; i < ProjectData.length; i++) {

    projectLabels.push(
      <SwiperSlide>
        <PrLabel index={i} key={i}/>
      </SwiperSlide>
    );
    projectImages.push(
      <SwiperSlide>
        <PrImage index={i} key={i}/>
      </SwiperSlide>
    )

  }

  const limiter = useLimiter(45);
  useFrame(({clock}) => {

    if (!limiter.isReady(clock)) return;
    // console.log(scrollYProgress)

  });

  return (
    <group position={[0.05, 0.5, 1.05]}>
      <Html center className={styles.htmlDiv}>
        <Swiper
          className={styles.labels}
          modules={[Controller, Mousewheel, Pagination, Navigation, Autoplay, A11y]}
          onSwiper={(swiper) => {
            swiper1Ref.current = swiper;
          }}
          pagination={{
            clickable: true
          }}
          a11y={{enabled: true}}
          slidesPerView={1}
          direction="vertical"
          navigation
          mousewheel
          loop
        >
          {projectLabels}
        </Swiper>
        <Swiper
          className={styles.images}
          modules={[Controller, Mousewheel, Navigation, Autoplay, A11y]}
          onSwiper={(swiper) => {
            swiper1Ref.current = swiper;
          }}
          a11y={{enabled: true}}
          slidesPerView={1}
          direction="vertical"
          navigation
          mousewheel
          loop
        >
          {projectImages}
        </Swiper>
      </Html>
      <mesh>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}/>
        <meshBasicMaterial color="blue" visible={viewHelpers}/>
      </mesh>
    </group>
  );

}
