import styled from "styled-components";

export const MainColumn = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: ${(props) => props.theme.fonts.size.normal};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
    line-height: 1;
    text-transform: uppercase;
  }
`;
