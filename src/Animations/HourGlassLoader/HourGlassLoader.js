import React from "react";
import "./HourGlassLoader.css"; // Import the CSS file

function HourglassLoader() {
  return (
    <div className="hourglass-loader">
      <div className="hourglass">
        <div className="glass-top"></div>
        <div className="glass-bottom"></div>
        <div className="sand"></div>
      </div>
    </div>
  );
}

export default HourglassLoader;
