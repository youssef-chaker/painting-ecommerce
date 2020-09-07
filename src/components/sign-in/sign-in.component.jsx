import React from "react";
import {
  SignInContainer,
  SignInTitle,
  InputsContainer,
} from "./sign-in.styles";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

const SignIn = () => (
  <SignInContainer>
    <SignInTitle>Already a member ?</SignInTitle>
    <span>sign in with your email and password</span>
    <form>
      <InputsContainer>
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
      </InputsContainer>
      <Button type="submit">Sign in</Button>
    </form>
  </SignInContainer>
);

export default SignIn;
