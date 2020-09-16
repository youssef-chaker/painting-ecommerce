import React, { useState } from "react";
import {
  SignInContainer,
  SignInTitle,
  InputsContainer,
} from "./sign-in.styles";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { connect } from "react-redux";
import { signInStart } from "../../redux/user/user.actions";
import ErrorMessage from "../error-message/error-message.component";

const SignIn = ({ signInStart, error }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInStart(credentials);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Already a member ?</SignInTitle>
      <span>sign in with your email and password</span>
      <br />
      {error ? <ErrorMessage message={error} /> : ""}
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <FormInput
            onChange={handleChange}
            label="username/email"
            name="username"
          />
          <FormInput
            onChange={handleChange}
            label="password"
            type="password"
            name="password"
          />
        </InputsContainer>
        <Button type="submit">Sign in</Button>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInStart: (credentials) => dispatch(signInStart(credentials)),
});

const mapStateToProps = ({ user: { loginError } }) => ({ error: loginError });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
