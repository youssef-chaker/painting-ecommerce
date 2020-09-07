import React from "react";
import { SignInUpContainer } from "./sign-in-up.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Waves from "../../components/waves/waves.component";

const SignInUpPage = () => (
  <div>
    <SignInUpContainer>
      <SignIn />
      <SignUp />
    </SignInUpContainer>
    <Waves />
  </div>
);

export default SignInUpPage;
