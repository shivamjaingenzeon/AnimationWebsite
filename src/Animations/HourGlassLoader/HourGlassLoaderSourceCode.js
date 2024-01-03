export default `import React from 'react';
import './HourglassLoader.css'; // Import the CSS file

function HourglassLoader() {
  return (
    <div className="hourglass-loader">
      <div className="hourglass">
        <div className="upper-half"></div>
        <div className="lower-half"></div>
      </div>
    </div>
  );
}

export default HourglassLoader;
`;
