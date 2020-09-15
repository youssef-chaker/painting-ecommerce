import React from "react";
import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer,
} from "./header.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer>
      <OptionLink to="/">LOGO</OptionLink>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div">Sign out</OptionLink>
      ) : (
        <OptionLink to="/Signin">Sign in</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
