import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    console.log("isloading changed");
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
};

export default WithSpinner;
