import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const CardSkeleton = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardSkeletonItem = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  .skeleton-header {
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .skeleton-theme {
    width: 82px;
    height: 20px;
    background: linear-gradient(90deg, #c1cddc 25%, #e9eef7 50%, #c1cddc 75%);
    background-size: 200px 100%;
    animation: ${shimmer} 2s infinite;
    border-radius: 18px;
  }

  .skeleton-menu {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;

    .skeleton-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: linear-gradient(90deg, #c1cddc 25%, #e9eef7 50%, #c1cddc 75%);
      background-size: 200px 100%;
      animation: ${shimmer} 2s infinite;

      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }

  .skeleton-content {
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .skeleton-stripe {
    background: linear-gradient(90deg, #c1cddc 25%, #e9eef7 50%, #c1cddc 75%);
    background-size: 200px 100%;
    animation: ${shimmer} 2s infinite;
    border-radius: 4px;

    &.skeleton-stripe-1 {
      width: 113px;
      height: 13px;
      animation-delay: 0.1s;
      margin-bottom: 8px;
    }

    &.skeleton-stripe-2 {
      width: 58px;
      height: 13px;
      animation-delay: 0.3s;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;
