import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ccc;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35), 0 3px 6px rgba(0, 0, 0, 0.35);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.55), 0 10px 10px rgba(0, 0, 0, 55);
  }
`;
