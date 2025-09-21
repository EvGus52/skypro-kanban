import styled from "styled-components";

export const EmptyStateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100px;
`;

export const EmptyStateText = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;
