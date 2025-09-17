import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  max-width: 420px;
  width: 100%;
  padding: 40px 32px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 0.7px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.colors.shadow};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 14px;
  line-height: 21px;
`;

export const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;
