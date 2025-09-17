import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalBlockSmall,
  ModalTitle,
  ModalMediaQueries,
} from "../../shared/Modal.styled";
import { PrimaryButton, SecondaryButton } from "../../shared/BaseButton.styled";

// Экспортируем общие компоненты
export {
  ModalOverlay as Overlay,
  ModalContainer as Container,
  ModalBlockSmall as Block,
  ModalMediaQueries as MediaQueries,
};

// Переопределяем Title для выравнивания по центру
export const Title = styled(ModalTitle)`
  text-align: center;
`;

// Форма
export const Form = styled.form``;

// Группа кнопок
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

// Кнопка "Да" (используем PrimaryButton)
export const ExitYes = styled(PrimaryButton)`
  width: 153px;
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Кнопка "Нет" (используем SecondaryButton)
export const ExitNo = styled(SecondaryButton)`
  width: 153px;

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;
