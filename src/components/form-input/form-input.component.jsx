import React from "react";
import { CustomTextField } from "./form-input.styles";

const FormInput = ({ handleChange, ...props }) => (
  <CustomTextField
    style={{ margin: "10px 0" }}
    onChange={handleChange}
    {...props}
  ></CustomTextField>
);

export default FormInput;
