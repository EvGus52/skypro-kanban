import styled from "styled-components";

// Базовый стиль для всех кнопок
export const BaseButton = styled.button`
  height: ${(props) => props.theme.sizes.buttonHeight};
  margin-bottom: 10px;
  border-radius: ${(props) => props.theme.sizes.borderRadiusSmall};
  font-family: ${(props) => props.theme.fonts.family};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-style: normal;
  font-size: ${(props) => props.theme.fonts.size.normal};
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  border: none;

  @media screen and (max-width: 495px) {
    width: 100%;
    height: ${(props) => props.theme.sizes.buttonHeightLarge};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  a {
    color: ${(props) => props.theme.colors.buttonText};
    text-decoration: none;
  }

  &:hover a {
    color: ${(props) => props.theme.colors.buttonText};
  }
`;

// Основная кнопка с фоном
export const PrimaryButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};

  a {
    color: ${(props) => props.theme.colors.buttonText};
    text-decoration: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.hoverPrimary};
  }

  &:hover a {
    color: ${(props) => props.theme.colors.buttonText};
  }
`;

// Вторичная кнопка с границей
export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  border: 0.7px solid ${(props) => props.theme.colors.secondaryButtonBorder};
  color: ${(props) => props.theme.colors.secondaryButtonText};
  font-weight: ${(props) =>
    props.theme.fonts.weight[props.theme.colors.secondaryButtonWeight]};

  a {
    color: ${(props) => props.theme.colors.secondaryButtonText};
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.buttonText};
    border-color: ${(props) => props.theme.colors.secondaryButtonHoverBorder};
  }

  &:hover a {
    color: ${(props) => props.theme.colors.buttonText};
  }
`;

// Кнопка для форм
export const FormButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  width: 132px;
  float: right;

  &:hover {
    background: ${(props) => props.theme.colors.hoverPrimary};
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    float: none;
  }
`;

// Кнопка на всю ширину
export const FullWidthButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.hoverPrimary};
  }
`;
