import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.$error ? "#FF6B6B" : "#D9D9D9")};
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$error ? "#FF6B6B" : "#4A90E2")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$error ? "rgba(255, 107, 107, 0.2)" : "rgba(74, 144, 226, 0.2)"};
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.$error ? "#FF6B6B" : "#D9D9D9")};
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background-color: #fff;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$error ? "#FF6B6B" : "#4A90E2")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$error ? "rgba(255, 107, 107, 0.2)" : "rgba(74, 144, 226, 0.2)"};
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;
