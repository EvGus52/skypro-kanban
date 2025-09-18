import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.sizes.padding};

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 ${(props) => props.theme.sizes.paddingSmall};
  }
`;
