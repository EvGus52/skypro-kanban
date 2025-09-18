import styled from "styled-components";
import {
  ModalOverlay,
  ModalContainer,
  ModalBlock,
  ModalContent,
  ModalTitle,
  ModalFormWrapper,
  ModalForm,
  ModalFormBlock,
  ModalLabel,
  ModalErrorMessage,
  ModalValidationError,
} from "../../shared/Modal.styled";
import { FormTextarea } from "../../shared/BaseInput.styled";
import {
  ButtonEditEdit,
  ButtonEditCancel,
  ButtonEditDelete,
  ButtonEditClose,
} from "../../Button/Button.styled";

export {
  ModalOverlay as Overlay,
  ModalTitle as Title,
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

// Специфичные стили для PopBrowse
export const Content = styled(ModalContent)`
  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }

  @media screen and (max-width: 495px) {
    .theme-down {
      display: block;
      margin-bottom: 20px;
    }

    .theme-top {
      display: none;
    }
  }
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media screen and (max-width: 660px) {
    &.browse-mode {
      margin: 0;
    }
  }
`;

export const TitleInput = styled.input`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0;
  font-size: 20px;
  font-weight: ${(props) =>
    props.theme.fonts.weight[props.theme.colors.titleInputWeight]};
  width: 100%;
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.text};

  &.error {
    border: 1px solid #ff6b6b;
  }
`;

export const ThemeCategory = styled.div`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  padding: 8px 20px;
  border-radius: ${(props) => props.theme.sizes.borderRadiusLarge};
  display: inline-block;

  p {
    color: ${(props) => props.$color};
    margin: 0;
  }
`;

export const TextArea = styled(FormTextarea)`
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  line-height: 1.5;
  resize: vertical;
  font-family: inherit;

  &.error {
    border: 1px solid #ff6b6b;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &[readonly] {
    background-color: ${(props) =>
      props.theme.colors.textareaReadonlyBackground};
    cursor: default;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  &.hidden {
    display: none;
  }

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  /* Порядок кнопок для мобильной версии в режиме редактирования */
  &.edit-buttons {
    @media screen and (max-width: 495px) {
      ${ButtonEditEdit} {
        order: 1; /* Сохранить */
      }
      ${ButtonEditClose} {
        order: 2; /* Закрыть */
      }
      ${ButtonEditCancel} {
        order: 3; /* Отменить */
      }
      ${ButtonEditDelete} {
        order: 4; /* Удалить задачу */
      }
    }
  }

  @media screen and (max-width: 495px) {
    width: 100%;

    button {
      margin-right: 0px;
    }
  }
`;

export const DeleteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const DeleteModalContent = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.colors.shadow};
  max-width: 400px;
  width: 100%;
  padding: 24px;
  text-align: center;
  border: 0.7px solid ${(props) => props.theme.colors.border};
`;

export const DeleteModalTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: ${(props) => props.theme.fonts.weight.semibold};
  color: ${(props) => props.theme.colors.text};
`;

export const DeleteModalText = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textMuted};
  line-height: 1.5;
`;

export const DeleteModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const DeleteModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  cursor: pointer;
  min-width: 100px;
  font-family: ${(props) => props.theme.fonts.family};

  &.cancel {
    border: 1px solid ${(props) => props.theme.colors.border};
    background: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.textMuted};
  }

  &.confirm {
    border: none;
    background: ${(props) =>
      props.disabled ? props.theme.colors.disabled : "#dc3545"};
    color: ${(props) => props.theme.colors.buttonText};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

// Медиа-запросы
// Переопределяем стили статуса для режима просмотра в мобильной версии
export const StatusSectionBrowse = styled.div`
  margin-bottom: 11px;

  @media screen and (max-width: 660px) {
    &.browse-mode {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }
  }
`;

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
    ${ModalBlock} {
      padding: 20px 16px 32px;
    }

    ${ModalForm} {
      max-width: 100%;
      width: 100%;
      display: block;
    }
  }
`;
