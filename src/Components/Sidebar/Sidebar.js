import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getActiveAnimationName,
  getAnimationButtonActive,
  setAnimationButtonActive,
} from "../../Redux/AlertSlice";
import "./Sidebar.css";

const Sidebar = ({ animations }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  // Access the Redux state
  const activeAnimation = useSelector(getActiveAnimationName);
  const isAnimationButtonActive = useSelector(getAnimationButtonActive);

  // Access the Redux dispatch function
  const filteredAnimations = animations.filter((animation) =>
    animation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const onClickAnimation = (animation) => {
    // Dispatch the action to set the active animation and button state
    dispatch(
      setAnimationButtonActive({
        isActive: true,
        animationName: animation,
      })
    );
  };

  return (
    <div className="sidebar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search animations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <h3 className="animation-list">Animation List</h3>
      <ul>
        {filteredAnimations.map((animation, index) => (
          <li key={index}>
            <button
              onClick={() => {
                console.log("Button clicked with animation: ", animation);
                onClickAnimation(animation.name);
              }}
              className={
                isAnimationButtonActive && activeAnimation === animation.name
                  ? "active"
                  : ""
              }
            >
              {animation.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
