export default `
import Skeleton from "@yisheng90/react-loading";
import React from "react";
import "./Loading.css";

const Loading = () => {
  const skeletonStyle = {
    height: "5px",
  };

  return (
    <div className="loading">
      <div className="loading-spinner">
        <div className="circle-container">
          <div className="half-circle"></div>
        </div>
        <p className="loading-text">Segmenting Fields</p>
      </div>
      <Skeleton width={800} style={skeletonStyle} />
      <Skeleton width={650} style={skeletonStyle} />
      <Skeleton width={450} style={skeletonStyle} />
      <Skeleton width={300} style={skeletonStyle} />
    </div>
  );
};

export default Loading;
`;
