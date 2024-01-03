import React from "react";
import "./RainbowLoadingSpinner.css";

const RainbowLoadingSpinner = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="loader-line-wrap" key={index}>
            <div className="loader-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RainbowLoadingSpinner;
