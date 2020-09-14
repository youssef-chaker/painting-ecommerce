import React from "react";
import { SwiperSlide } from "swiper/react";
import painting1 from "../../assets/painting1.jpg";

const SwiperCoverFlowImage = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <SwiperSlide
      style={{
        backgroundImage: `url(${painting1})`,
        width: "13vw",
        height: "100%",
        backgroundSize: "cover",
      }}
    ></SwiperSlide>
  );
};

export default SwiperCoverFlowImage;
