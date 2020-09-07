import React from "react";
import {
  SignUpContainer,
  SignUpTitle,
  InputsContainer,
} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignUp = () => (
  <SignUpContainer>
    <SignUpTitle>Do not have an account ?</SignUpTitle>
    <span>sign up with your email and password</span>
    <form>
      <InputsContainer>
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
        <FormInput
          label="confirm password"
          type="password"
          name="confirm password"
        />
      </InputsContainer>
      <Button type="submit">Sign up</Button>
    </form>
  </SignUpContainer>
);

export default SignUp;
