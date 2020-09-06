import styled from "styled-components";

export const CustomButton = styled.button`
  background: transparent;
  border-radius: 20px;
  border: #333 2px solid;
  padding: 5px 20px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  width: fit-content;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    bottom: 0;
    height: 3px;
    background: #333;
    height: 120%;
    left: -10%;
    transform: skewX(15deg);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    /* transform: scale(1.02); */
    transition: all 200ms ease-in-out;
    color: white;
    border-color: white;
    /* color: #ccc; */
    &:after {
      left: -10%;
      width: 120%;
    }
  }
`;
