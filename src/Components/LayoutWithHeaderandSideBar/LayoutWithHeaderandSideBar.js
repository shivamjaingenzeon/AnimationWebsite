import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import AnimationViewer from "../AnimationViewer/AnimationViewer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getActiveAnimationName,
  getAnimationButtonActive,
} from "../../Redux/AlertSlice";
import { animations } from "../AnimationUtils"; // import animations list from AnimationUtils

const LayoutWithHeaderAndSidebar = () => {
  const activeAnimationName = useSelector(getActiveAnimationName);
  const isAnimationButtonActive = useSelector(getAnimationButtonActive);

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Sidebar animations={animations} />
          <AnimationViewer animation={activeAnimationName} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LayoutWithHeaderAndSidebar;
