import React, { useState } from "react";
import {
  SignUpContainer,
  SignUpTitle,
  InputsContainer,
} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    if (credentials.password !== credentials.confirmPassword) {
      return;
    }
    e.preventDefault();
    signUpStart(credentials);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Do not have an account ?</SignUpTitle>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <FormInput onChange={handleChange} label="username" name="username" />
          <FormInput
            onChange={handleChange}
            label="email"
            type="email"
            name="email"
          />
          <FormInput
            onChange={handleChange}
            label="password"
            type="password"
            name="password"
          />
          <FormInput
            onChange={handleChange}
            label="confirm password"
            type="password"
            name="confirmPassword"
          />
        </InputsContainer>
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
