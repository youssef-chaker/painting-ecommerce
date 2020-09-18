import React, { useState, useEffect } from "react";
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
import SwiperCoverFlow from "../../components/swiper-coverflow/swiper-coverflow.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import Alert from "../../components/alert/altert.component";

const HomePage = ({ currentUser }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [currentUser]);

  return (
    <div>
      <Alert
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        severity="success"
      >
        Successfully logged in
      </Alert>
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
        <SwiperCoverFlow />
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
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(HomePage);
