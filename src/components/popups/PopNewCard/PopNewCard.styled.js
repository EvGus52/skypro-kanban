import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ModalOverlay,
  ModalContainer,
  ModalBlock,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
  ModalFormWrapper,
  ModalForm,
  ModalFormBlock,
  ModalLabel,
  ModalErrorMessage,
  ModalValidationError,
  ModalMediaQueries,
} from "../../shared/Modal.styled";
import { FormInput, FormTextarea } from "../../shared/BaseInput.styled";
import { FormButton } from "../../shared/BaseButton.styled";

// Экспортируем общие компоненты
export {
  ModalOverlay as Overlay,
  ModalContent as Content,
  ModalTitle as Title,
  ModalCloseButton as CloseButton,
  ModalFormWrapper as Wrap,
  ModalForm as Form,
  ModalFormBlock as FormBlock,
  ModalLabel as Label,
  ModalErrorMessage as ErrorMessage,
  ModalValidationError as ValidationError,
};

// Переопределяем Container для применения правильной темы в мобильной версии
export const Container = styled(ModalContainer)`
  @media screen and (max-width: 660px) {
    background: ${(props) =>
      props.theme.colors.background}; /* Применяем цвет темы */
  }
`;

// Переопределяем Block для применения правильной темы в мобильной версии
export const Block = styled(ModalBlock)`
  @media screen and (max-width: 660px) {
    background-color: ${(props) =>
      props.theme.colors.popupBackground}; /* Применяем цвет темы */
  }
`;

// Специфичные стили для полей ввода
export const Input = styled(FormInput)`
  height: 40px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  line-height: 1.5;
  font-family: inherit;

  &.error {
    border: 1px solid red;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const TextArea = styled(FormTextarea)`
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  line-height: 1.5;
  resize: vertical;
  font-family: inherit;

  &.error {
    border: 1px solid red;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

// Кнопка создания
export const CreateButton = styled(FormButton)`
  height: 32px;
  border: none;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

// Медиа-запросы
export const MediaQueries = styled.div`
  @media screen and (max-width: 660px) {
    ${ModalOverlay} {
      top: 70px;
    }

    ${ModalContainer} {
      padding: 0;
      justify-content: flex-start;
    }

    ${ModalBlock} {
      border-radius: 0;
    }

    ${ModalFormWrapper} {
      display: block;
    }
  }

  @media screen and (max-width: 495px) {
    ${ModalContainer} {
      padding: 0;
      justify-content: flex-start;
    }

    ${ModalBlock} {
      padding: 20px 16px 32px;
    }

    ${ModalForm} {
      max-width: 100%;
      width: 100%;
      display: block;
    }

    ${TextArea} {
      max-width: 100%;
      height: 34px;
    }

    ${CreateButton} {
      height: 40px;
    }
  }
`;
