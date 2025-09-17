import styled from "styled-components";
import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  FormButton,
  FullWidthButton,
  ButtonGroup,
} from "../shared/BaseButton.styled";

// Экспортируем базовые компоненты
export {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  FormButton,
  FullWidthButton,
  ButtonGroup,
};

// Специфичные кнопки для browse
export const ButtonBrowseClose = styled(PrimaryButton)`
  // Наследует все стили от PrimaryButton (заливка #565EEF, белый текст)
`;

// Специфичные кнопки для edit
export const ButtonEditClose = styled(PrimaryButton)`
  // Наследует все стили от PrimaryButton (заливка #565EEF, белый текст)
`;

export const ButtonEditEdit = styled(SecondaryButton)`
  // Наследует все стили от SecondaryButton
`;

export const ButtonEditDelete = styled(SecondaryButton)`
  // Наследует все стили от SecondaryButton
`;

export const ButtonBrowseEdit = styled(SecondaryButton)`
  // Наследует все стили от SecondaryButton
`;

export const ButtonBrowseDelete = styled(SecondaryButton)`
  // Наследует все стили от SecondaryButton
`;
