import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

export const SpinnerItem = styled(CircularProgress)`
  width: 100px;
  height: 100px;
`;

export const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  pointer-events: none;
`;
