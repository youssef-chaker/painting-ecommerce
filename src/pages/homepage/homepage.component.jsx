import React from "react";
// import { ReactComponent as Waves } from "../../assets/wave.svg";
import Waves from "../../components/waves/waves.component";
import {
  Title,
  HomePageContainer,
  Paragraph,
  Left,
  SecondPage,
  CardsContainer,
} from "./homepage.styles";
import { Button } from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { EffectCube } from "swiper";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectCube]);

const ColoredCard = ({ color }) => (
  <div
    style={{ background: `${color}`, width: "200px", height: "200px" }}
  ></div>
);

const HomePage = () => (
  <div>
    <HomePageContainer>
      <Left>
        <Title>Lorem ipsum loco madrid</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          deleniti deserunt nemo sit libero autem eaque impedit vel dicta
          obcaecati molestiae vitae voluptas, omnis tempora minus amet ex
          facilis quisquam!
        </Paragraph>
        <Button>Button</Button>
      </Left>
      <Swiper
        effect="cube"
        grabCursor={true}
        pagination={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        <SwiperSlide
          style={{ background: "red", width: "200px", height: "200px" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ background: "blue", width: "200px", height: "200px" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ background: "green", width: "200px", height: "200px" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ background: "black", width: "200px", height: "200px" }}
        ></SwiperSlide>
      </Swiper>
    </HomePageContainer>
    <Waves />
    <SecondPage>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </SecondPage>
  </div>
);
export default HomePage;
