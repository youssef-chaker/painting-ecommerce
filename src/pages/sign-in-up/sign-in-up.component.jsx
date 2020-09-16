import React from "react";
import { SignInUpContainer } from "./sign-in-up.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Waves from "../../components/waves/waves.component";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Spinner from "../../components/spinner/spinner.component";

const SignInUpPage = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? <Spinner /> : ""}
      <SignInUpContainer>
        <SignIn />
        <SignUp />
      </SignInUpContainer>
      <Waves />
    </div>
  );
};

const mapStateToProps = ({ user: { isSigningInUp } }) => ({
  isLoading: isSigningInUp,
});

export default connect(mapStateToProps)(SignInUpPage);
