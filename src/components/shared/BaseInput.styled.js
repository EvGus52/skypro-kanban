import styled from "styled-components";

// Базовый стиль для всех полей ввода
export const BaseInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 0.7px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${(props) => props.theme.colors.text};
  transition: border-color 0.3s ease;

  &::-moz-placeholder {
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 1px;
    color: ${(props) => props.theme.colors.inputPlaceholder};
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 1px;
    color: ${(props) => props.theme.colors.inputPlaceholder};
    letter-spacing: -0.14px;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &.error {
    border-color: #ff6b6b;
  }

  ${(props) =>
    props.$error &&
    `
    border-color: #ff6b6b;
  `}

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

// Базовый стиль для textarea
export const BaseTextarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 8px;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 0.7px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${(props) => props.theme.colors.text};
  resize: vertical;
  transition: border-color 0.3s ease;

  &::-moz-placeholder {
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 1px;
    color: ${(props) => props.theme.colors.inputPlaceholder};
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 1px;
    color: ${(props) => props.theme.colors.inputPlaceholder};
    letter-spacing: -0.14px;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &.error {
    border-color: #ff6b6b;
  }

  ${(props) =>
    props.$error &&
    `
    border-color: #ff6b6b;
  `}

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

// Поле ввода для форм
export const FormInput = styled(BaseInput)`
  margin: 20px 0;
`;

// Textarea для форм
export const FormTextarea = styled(BaseTextarea)`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

// Поле ввода для модальных окон
export const ModalInput = styled(BaseInput)`
  min-width: 100%;
  line-height: 21px;
  letter-spacing: -0.28px;
  margin-bottom: 0;
  height: 30px;
`;
