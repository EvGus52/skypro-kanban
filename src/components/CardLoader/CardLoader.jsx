import React from "react";
import { CardSkeleton, CardSkeletonItem } from "./CardLoader.styled";

const CardLoader = () => {
  return (
    <CardSkeleton>
      <CardSkeletonItem>
        <div className="skeleton-header">
          <div className="skeleton-theme"></div>
          <div className="skeleton-menu">
            <div className="skeleton-dot"></div>
            <div className="skeleton-dot"></div>
            <div className="skeleton-dot"></div>
          </div>
        </div>
        <div className="skeleton-content">
          <div className="skeleton-stripe skeleton-stripe-1"></div>
          <div className="skeleton-stripe skeleton-stripe-2"></div>
        </div>
      </CardSkeletonItem>
    </CardSkeleton>
  );
};

export default CardLoader;
