import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = ({ children, severity, ...props }) => (
  <Snackbar {...props}>
    <MuiAlert elevation={6} variant="filled" severity={severity}>
      {children}
    </MuiAlert>
  </Snackbar>
);

export default Alert;
