import React from "react";
import "./LoadingScreen.css";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingScreen() {
  return (
    <div className="loading_screen">
      <ClipLoader
        color={"#fff"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingScreen;
