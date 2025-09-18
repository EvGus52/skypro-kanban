import styled from "styled-components";

export const CategoriesContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesParagraph = styled.p`
  font-family: ${(props) => props.theme.fonts.family};
  font-weight: ${(props) => props.theme.fonts.weight.semibold};
  font-style: normal;
  font-size: ${(props) => props.theme.fonts.size.normal};
  line-height: 100%;
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: ${(props) => props.theme.sizes.buttonHeight};
  padding: 8px 20px;
  border-radius: ${(props) => props.theme.sizes.borderRadiusLarge};
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    opacity: 1;
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.normal};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
    line-height: ${(props) => props.theme.fonts.size.normal};
    white-space: nowrap;
  }
`;
