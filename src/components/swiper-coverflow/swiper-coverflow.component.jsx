import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  // Navigation,
  // Pagination,
  // Scrollbar,
  // A11y,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import painting1 from "../../assets/painting1.jpg";
import painting2 from "../../assets/painting2.jpg";
import painting3 from "../../assets/painting3.jpg";
import painting4 from "../../assets/painting4.jpg";
import painting5 from "../../assets/painting5.jpg";
// import SwiperCoverFlowImage from "../swiper-coverflow-image/swiper-coverflow-image";

SwiperCore.use([EffectCoverflow]);

const SwiperCoverFlow = () => (
  <Swiper
    effect="coverflow"
    slidesPerView={6}
    grabCursor
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
  >
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting1})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",
      }}
    ></SwiperSlide>
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting2})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",
      }}
    ></SwiperSlide>{" "}
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting3})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",
      }}
    ></SwiperSlide>{" "}
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting4})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",
      }}
    ></SwiperSlide>
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting5})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",

        objectFit: "cover",
      }}
    ></SwiperSlide>
  </Swiper>
);

export default SwiperCoverFlow;
