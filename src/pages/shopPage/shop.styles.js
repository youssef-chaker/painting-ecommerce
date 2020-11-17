import React from "react";
import styled from "styled-components";

export const ShopContainer = styled.div`
  margin: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(auto-fit,minmax(200px,2fr));
  grid-template-columns: repeat(auto-fit,minmax(200px,2fr));
`;
