import React from "react";
import { CustomButton } from "./button.styles";

export const Button = ({ children, ...props }) => (
  <CustomButton {...props}>{children}</CustomButton>
);
