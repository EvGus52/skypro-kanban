import React from "react";
import { MainContainer, MainBlock, MainContent } from "./Main.styled";

const Main = ({ children }) => (
  <MainContainer className="center">
    <MainBlock>
      <MainContent>{children}</MainContent>
    </MainBlock>
  </MainContainer>
);

export default Main;
