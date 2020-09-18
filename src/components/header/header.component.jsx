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
import { signOut } from "../../redux/user/user.actions";
import UserMenu from "../user-menu/user-menu.component";

const Header = ({ currentUser, signOut }) => (
  <HeaderContainer>
    <LogoContainer>
      <OptionLink to="/">LOGO</OptionLink>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <UserMenu count={6} currentUser />
      ) : (
        <OptionLink to="/Signin">Sign in</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
