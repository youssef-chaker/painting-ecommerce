import React from "react";
import { CustomTextField } from "./form-input.styles";

const FormInput = ({ handleChange, fullWidth, ...props }) => (
  <CustomTextField
    style={{ margin: "10px 0", width: "100%" }}
    onChange={handleChange}
    {...props}
  ></CustomTextField>
);

export default FormInput;
