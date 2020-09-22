import CircularProgress from "@material-ui/core/CircularProgress";
import styled, { css } from "styled-components";

export const SpinnerItem = styled(CircularProgress)`
  width: 100px;
  height: 100px;
`;

export const SpinnerContainer = styled.div`
  ${(props) =>
    props.fullscreen
      ? css`
          width: 100vw;
          height: 100vh;
          top: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          z-index: 2;
        `
      : css`
          width: 100%;
          height: 80%;
        `}
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;
