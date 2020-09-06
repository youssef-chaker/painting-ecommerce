import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 70px;
  width: 100%;
  padding: 0 40px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const underlineAnimation = css`
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #333;
  }
  &:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY(8px/2);
    transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 200ms;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 200ms;
    }
    &:after {
      transition: transform 0s 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0s 200ms;
    }
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-weight: 1000;
  position: relative;
  ${underlineAnimation}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
