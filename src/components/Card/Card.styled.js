import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: ${(props) => props.theme.colors.cardBackground};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  p {
    font-size: ${(props) => props.theme.fonts.size.small};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
    line-height: ${(props) => props.theme.fonts.size.small};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.textMuted};
  }
`;

export const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fonts.size.normal};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  line-height: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 180px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 180px;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: ${(props) => props.theme.fonts.size.small};
    line-height: 13px;
    color: ${(props) => props.theme.colors.textMuted};
    letter-spacing: 0.2px;
  }
`;
