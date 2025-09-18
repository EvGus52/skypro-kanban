import styled from "styled-components";
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
} from "../../shared/Modal.styled";
import { FormInput, FormTextarea } from "../../shared/BaseInput.styled";
import { FormButton } from "../../shared/BaseButton.styled";

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

export const Container = styled(ModalContainer)`
  @media screen and (max-width: 660px) {
    background: ${(props) => props.theme.colors.background};
  }
`;

export const Block = styled(ModalBlock)`
  @media screen and (max-width: 660px) {
    background-color: ${(props) => props.theme.colors.popupBackground};
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
