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
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      <OptionLink to="/Signin">Sign in</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
