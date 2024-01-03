import React from "react";
import "./RingLoader.css";

const RingLoader = () => {
  return (
    <div className="ring-container">
      <div className="ring">
        <span className="ring-text">Loading</span>
        <span className="ring-span"></span>
      </div>
    </div>
  );
};

export default RingLoader;
