import React from "react";
import { CardSkeleton, CardSkeletonItem } from "./CardLoader.styled";

const CardLoader = () => {
  return (
    <CardSkeleton>
      <CardSkeletonItem>
        <div className="skeleton-header">
          <div className="skeleton-theme"></div>
          <div className="skeleton-menu"></div>
        </div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-date"></div>
        </div>
      </CardSkeletonItem>
    </CardSkeleton>
  );
};

export default CardLoader;
