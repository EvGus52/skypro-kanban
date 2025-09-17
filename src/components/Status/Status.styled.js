import styled from "styled-components";

export const StatusContainer = styled.div`
  margin-bottom: 11px;
`;

export const StatusParagraph = styled.p`
  margin-bottom: 14px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.semibold};
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: ${(props) => props.theme.sizes.borderRadiusLarge};
  border: 0.7px solid ${(props) => props.theme.colors.inputBorder};
  color: ${(props) => props.theme.colors.textMuted};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.4;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    opacity: 1;
    background-color: ${(props) => props.theme.colors.active};
    color: ${(props) => props.theme.colors.activeText};
    border-color: ${(props) => props.theme.colors.active};
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
