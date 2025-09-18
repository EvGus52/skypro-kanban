import React from "react";
import { EmptyStateContainer, EmptyStateText } from "./EmptyState.styled";

const EmptyState = ({ message = "Новых задач нет" }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateText>{message}</EmptyStateText>
    </EmptyStateContainer>
  );
};

export default EmptyState;
