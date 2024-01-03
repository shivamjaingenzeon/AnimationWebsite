import React from "react";
import "./CircularLoading.css"; // Import your CSS file here

const CircularLoading = () => {
  return (
    <div className="loading-popup">
      <div className="loading-content">
        <div className="loading-indicator-popup">
          <div className="loading-animation"></div>
          <div>Put Your Default Content</div>
        </div>
      </div>
    </div>
  );
};

export default CircularLoading;
