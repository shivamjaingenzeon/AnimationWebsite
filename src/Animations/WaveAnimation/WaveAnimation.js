import React from "react";
import "./WaveAnimation.css";

function WaveAnimation() {
  return (
    <div className="center">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={`wave wave-${index + 1}`}></div>
      ))}
    </div>
  );
}

export default WaveAnimation;
