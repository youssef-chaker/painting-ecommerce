import styled from "styled-components";

export const HomePageContainer = styled.div`
  padding: 0 140px;
  display: grid;
  grid-template-columns: 33% 67%;
  height: 50vh;
  margin-bottom: 40vh;
`;

export const Title = styled.h1`
  color: #333;
  font-weight: bolder;
`;

export const Paragraph = styled.p`
  margin: 30px 0;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const SecondPage = styled.div`
  height: 100vh;
  background: #333;
  padding: 0 120px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;
