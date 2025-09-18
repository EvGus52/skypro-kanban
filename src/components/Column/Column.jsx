import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { MainColumn, ColumnTitle } from "./Column.styled";
import { CardsContainer } from "../Card/Card.styled";

const Column = ({ title, children, status }) => {
  const { setNodeRef } = useDroppable({
    id: status || title,
    data: {
      type: "column",
      status: status || title,
    },
  });

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer ref={setNodeRef}>{children}</CardsContainer>
    </MainColumn>
  );
};

export default Column;
