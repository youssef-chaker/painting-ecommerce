import styled from "styled-components";

export const SellPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  /* background: #007aff; */
`;

export const SellPagePostContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  border: #333 solid 2px;
  padding: 2rem 4rem;
  border-radius: 10px;
  /* background: rgba(255, 255, 255, 0.2); */
`;

export const SellPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 500px;
  /* background: #007aff; */
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  cursor: pointer;
  width: 300px;
  height: 400px;
  border: rgba(0, 0, 0, 0.87) solid 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 300ms;

  &:hover {
    & > *:not(img) {
      transform: scale(1.2);
      transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 300ms;
    }
  }
`;
