import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #ffffff;
  max-width: 420px;
  width: 100%;
  padding: 40px 32px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #94a6be;
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
  background-color: #565eef;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    background-color: #33399b;
  }
`;
