import React from "react";
import { MainColumn, ColumnTitle } from "./Column.styled";
import { CardsContainer } from "../Card/Card.styled";

const Column = ({ title, children }) => (
  <MainColumn>
    <ColumnTitle>
      <p>{title}</p>
    </ColumnTitle>
    <CardsContainer>{children}</CardsContainer>
  </MainColumn>
);

export default Column;
