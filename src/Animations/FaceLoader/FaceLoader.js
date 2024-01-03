import React from "react";
import "./FaceLoader.css";

const FaceLoader = () => {
  return (
    <div className="face-container">
      <div className="face">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
        <div className="mouth"></div>
      </div>
    </div>
  );
};

export default FaceLoader;
