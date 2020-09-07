import React from "react";
import { CustomButton } from "./button.styles";

const Button = ({ children, ...props }) => (
  <CustomButton {...props}>{children}</CustomButton>
);

export default Button;
