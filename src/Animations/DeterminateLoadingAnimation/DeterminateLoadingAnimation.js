import React, { useEffect, useState } from "react";
import "./DeterminateLoadingAnimation.css";

function DeterminateLoadingAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10); // Simulate loading progress
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="loading-container">
      <div className="loading-bar" style={{ width: `${progress}%` }}>
        {`${progress}%`}
      </div>
    </div>
  );
}

export default DeterminateLoadingAnimation;
