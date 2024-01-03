import React from "react";
import "./TurtleLoader.css";
import turtleImage from "../../assets/turtle.png"; // Update the path to your turtle image


const TurtleLoader = () => {
  return (
    <div className="turtle-container">
      <img src={turtleImage} alt="Turtle" className="turtle" />
      <div className="path"></div>
    </div>
  );
};

export default TurtleLoader;
