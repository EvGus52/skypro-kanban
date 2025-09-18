import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalBlockSmall,
  ModalTitle,
  ModalMediaQueries,
} from "../../shared/Modal.styled";
import { PrimaryButton, SecondaryButton } from "../../shared/BaseButton.styled";

// Переопределяем Overlay для модалки выхода - всегда поверх всего контента
export const Overlay = styled(ModalOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999; /* Поверх всего, включая header */

  @media screen and (max-width: 660px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }
`;

// Переопределяем Container для модалки выхода - всегда должна быть поверх контента
export const Container = styled(ModalContainer)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.overlay};
  z-index: 9999;

  @media screen and (max-width: 660px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.overlay};
    z-index: 9999;
  }
`;

// Переопределяем Block с скруглениями и убираем ограничение по высоте
export const Block = styled(ModalBlockSmall)`
  border-radius: 12px;

  @media screen and (max-width: 660px) {
    border-radius: 12px;
    min-height: auto; /* Убираем ограничение по высоте */
    background-color: ${(props) =>
      props.theme.colors.popupBackground}; /* Применяем тему */
  }
`;

export { ModalMediaQueries as MediaQueries };

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
