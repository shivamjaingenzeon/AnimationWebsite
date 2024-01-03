import React from "react";

const AnimationList = ({ animation }) => {
  return (
    <div className="animation-list">
      <h2>{animation.name}</h2>
      <p>{animation.description}</p>
    </div>
  );
};

export default AnimationList;
