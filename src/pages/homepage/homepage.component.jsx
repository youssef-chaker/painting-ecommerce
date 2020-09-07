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
import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";

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
