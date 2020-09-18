import React from "react";
import { SpinnerContainer, SpinnerItem } from "./spinner.styles";

const Spinner = ({ ...props }) => (
  <SpinnerContainer {...props}>
    <SpinnerItem />
  </SpinnerContainer>
);

export default Spinner;
