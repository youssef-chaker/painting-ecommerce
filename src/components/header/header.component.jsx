import React from "react";
import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <OptionLink to="/">LOGO</OptionLink>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/one">ONE</OptionLink>
      <OptionLink to="/two">TWO</OptionLink>
      <OptionLink to="/three">THREE</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
