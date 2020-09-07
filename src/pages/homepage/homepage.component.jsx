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
import Swiper from "react-id-swiper";
const CubeEffect = () => {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <Swiper {...params}>
      <div
        style={{
          background: "red",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/2)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/3)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/4)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/5)",
        }}
      />
    </Swiper>
  );
};

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
      <CubeEffect />
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
