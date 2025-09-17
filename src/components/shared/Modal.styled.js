import styled from "styled-components";

// Базовый overlay для всех модальных окон
export const ModalOverlay = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex.popup};
`;

// Контейнер модального окна
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.overlay};
`;

// Блок модального окна
export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.popupBackground};
  max-width: ${(props) => props.theme.sizes.popupMaxWidth};
  width: 100%;
  padding: 40px 30px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 0.7px solid ${(props) => props.theme.colors.border};
  position: relative;
  box-shadow: ${(props) => props.theme.colors.shadow};
`;

// Блок модального окна для маленьких окон
export const ModalBlockSmall = styled(ModalBlock)`
  max-width: ${(props) => props.theme.sizes.popupMaxWidthSmall};
  padding: 50px 60px;

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

// Контент модального окна
export const ModalContent = styled.div`
  display: block;
  text-align: left;
`;

// Заголовок модального окна
export const ModalTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.family};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.size.large};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  line-height: 24px;
  margin-bottom: 20px;
`;

// Кнопка закрытия
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${(props) => props.theme.colors.textMuted};
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

// Обертка для формы
export const ModalFormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

// Форма в модальном окне
export const ModalForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 100%;
  }
`;

// Блок формы
export const ModalFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// Лейбл формы
export const ModalLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.semibold};
  font-style: normal;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;

// Сообщение об ошибке
export const ModalErrorMessage = styled.div`
  color: #ff6b6b;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
`;

// Ошибка валидации
export const ModalValidationError = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
`;

// Медиа-запросы для модальных окон
export const ModalMediaQueries = styled.div`
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
