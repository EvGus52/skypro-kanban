import React from "react";
import styled from "styled-components";

const PlaceholderContainer = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const PlaceholderCard = styled.div`
  width: 220px;
  height: 130px;
  background: transparent;
  border: 2px dashed ${(props) => props.theme.colors.textMuted};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: all 0.2s ease;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
  }
`;

const DropZonePlaceholder = () => {
  return (
    <PlaceholderContainer>
      <PlaceholderCard />
    </PlaceholderContainer>
  );
};

export default DropZonePlaceholder;
