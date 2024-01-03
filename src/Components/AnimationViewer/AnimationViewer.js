import React, { useState, Suspense, useEffect } from "react";
import "./AnimationViewer.css";
import { useSelector } from "react-redux";
import {
  getActiveAnimationName,
  getAnimationButtonActive,
} from "../../Redux/AlertSlice";
import {
  sourceCodeComponents,
  loadCssContent,
  loadAnimationComponent,
} from "../AnimationUtils";

// Import react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose a different style if you prefer
import Home from "../HomeComponent/Home";
import CopyButton from "../CopyButton/CopyButton";

const AnimationViewer = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isSourceCodeActive, setIsSourceCodeActive] = useState(false);
  const [isCSSActive, setIsCSSActive] = useState(false);
  const animationName = useSelector(getActiveAnimationName);

  // Define a state variable to store the source code content
  const [sourceCodeContent, setSourceCodeContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [renderedComponent, setRenderedComponent] = useState(null);

  useEffect(() => {
    // Load source code content initially
    if (isSourceCodeActive) {
      const sourceCode = sourceCodeComponents[animationName];
      setSourceCodeContent(sourceCode);
    }
    if (isCSSActive) {
      loadCssContent(animationName).then((module) => {
        setCssContent(module.default);
      });
    }

    if (isAnimationActive) {
      const Component = loadAnimationComponent(animationName);
      setRenderedComponent(<Component />);
    }
  }, [animationName, isSourceCodeActive, isCSSActive, isAnimationActive]);

  const handleStartAnimation = async () => {
    setIsAnimationActive((prevIsAnimationActive) => !prevIsAnimationActive);

    if (!isAnimationActive) {
      const Component = loadAnimationComponent(animationName);
      setRenderedComponent(<Component />);
      setIsAnimationActive(true);
    } else {
      setIsAnimationActive(false);
    }
  };

  return (
    <div className="animation-container">
      {animationName ? (
        <>
          <h1>{animationName}</h1>
          <div className="button-container">
            <button
              className={`animation-button ${
                isAnimationActive ? "active" : ""
              }`}
              onClick={handleStartAnimation}
            >
              {isAnimationActive ? "Stop Animation" : "Start Animation"}
            </button>
            <button
              className={`animation-button ${
                isSourceCodeActive ? "active" : ""
              }`}
              onClick={() => {
                setIsSourceCodeActive(!isSourceCodeActive);
                // Load source code content when "Show Source Code" is clicked
                if (!isSourceCodeActive) {
                  const sourceCode = sourceCodeComponents[animationName];
                  setSourceCodeContent(sourceCode);
                }
              }}
            >
              {isSourceCodeActive ? "Hide Source Code" : "Show Source Code"}
            </button>
            <button
              className={`animation-button ${isCSSActive ? "active" : ""}`}
              onClick={() => setIsCSSActive(!isCSSActive)}
            >
              {isCSSActive ? "Hide CSS" : "Show CSS"}
            </button>
          </div>
          {isAnimationActive && (
            <div className="animation-viewer">
              <Suspense fallback={<div>Loading...</div>}>
                {renderedComponent}
              </Suspense>
            </div>
          )}
          <div className="split-container">
            {isSourceCodeActive && sourceCodeContent && (
              <div className="scrollable-section sourcecode-container">
                <CopyButton
                  content={sourceCodeContent}
                  className="copy-button-container"
                />
                <SyntaxHighlighter language="javascript" style={vs}>
                  {sourceCodeContent}
                </SyntaxHighlighter>
              </div>
            )}

            {isCSSActive && (
              <div className="scrollable-section css-container">
                <CopyButton
                  content={cssContent}
                  className="copy-button-container"
                />
                <SyntaxHighlighter language="css" style={vs}>
                  {cssContent}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="default-content">
          <Home />
        </div>
      )}
    </div>
  );
};

export default AnimationViewer;
