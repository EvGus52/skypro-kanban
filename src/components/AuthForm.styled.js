import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalBlock,
  ModalTitle,
  ModalForm as BaseModalForm,
  ModalMediaQueries,
} from "./shared/Modal.styled";
import { ModalInput } from "./shared/BaseInput.styled";
import { FullWidthButton } from "./shared/BaseButton.styled";

// Экспортируем общие компоненты
export {
  ModalOverlay as Wrapper,
  ModalContainer as Container,
  ModalBlock as ModalBlock,
  ModalTitle as ModalTitle,
  ModalInput as ModalInput,
  ModalMediaQueries as MediaQueries,
};

// Переопределяем ModalForm для добавления gap между инпутами
export const ModalForm = styled(BaseModalForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 100%;
  }
`;

// Модальное окно для авторизации
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

// Специальный блок модального окна для авторизации
export const AuthModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.popupBackground};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.colors.shadow};

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

// Кнопка (используем FullWidthButton)
export const PrimaryBtn = styled(FullWidthButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  border-radius: 4px;

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

// Заголовок модального окна авторизации (наследует от ModalTitle)
export const AuthModalTitle = styled(ModalTitle)`
  text-align: center;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  letter-spacing: -0.6px;
`;

// Группа формы
export const FormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;
