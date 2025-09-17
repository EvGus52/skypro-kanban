import styled from "styled-components";
import { PrimaryButton } from "../shared/BaseButton.styled";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const HeaderBlock = styled.div`
  height: ${(props) => props.theme.sizes.headerHeight};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  line-height: 1;
  margin-right: 20px;
  margin-bottom: 0;

  @media screen and (max-width: 495px) {
    z-index: ${(props) => props.theme.zIndex.fixed};
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: ${(props) => props.theme.sizes.buttonHeightLarge};
    border-radius: ${(props) => props.theme.sizes.borderRadiusSmall};
    margin-right: 0;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: ${(props) => props.theme.fonts.size.normal};
  line-height: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.link};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(props) => props.theme.colors.link};
    border-bottom: 1.9px solid ${(props) => props.theme.colors.link};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export const HeaderPopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 0.7px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  padding: 34px;
  text-align: center;
  z-index: ${(props) => props.theme.zIndex.dropdown};

  .pop-user-set__name {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fonts.size.normal};
    font-weight: ${(props) => props.theme.fonts.weight.medium};
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }

  .pop-user-set__mail {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;

    /* Обработка длинного email */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .pop-user-set__theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fonts.size.normal};
      line-height: 21px;
      letter-spacing: -0.14px;
    }

    input[type="checkbox"] {
      position: relative;
      width: 24px;
      height: 13px;
      border-radius: 100px;
      background: ${(props) => props.theme.colors.disabled};
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.checkboxSlider};
        transition: ${(props) => props.theme.animations.transition};
      }

      &:checked::before {
        left: 12px;
      }
    }
  }

  button {
    width: 72px;
    height: ${(props) => props.theme.sizes.buttonHeight};
    background: transparent;
    color: ${(props) => props.theme.colors.text};
    border-radius: ${(props) => props.theme.sizes.borderRadiusSmall};
    border: 1px solid ${(props) => props.theme.colors.link};
    cursor: pointer;

    a {
      color: ${(props) => props.theme.colors.link};
      text-decoration: none;
    }
  }
`;
