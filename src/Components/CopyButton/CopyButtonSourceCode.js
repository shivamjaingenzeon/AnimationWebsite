export default `
import React, { useState } from "react";
import copyIcon from "../../assets/copy-icon.png";
import copiedIcon from "../../assets/copied-icon.png";
import "./CopyButton.css";

const CopyButton = ({ content }) => {
  const [showCopiedIcon, setShowCopiedIcon] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setShowCopiedIcon(true);

    setTimeout(() => {
      setShowCopiedIcon(false);
    }, 2000);
  };

  return (
    <div className="copy-button-container">
      <img
        src={showCopiedIcon ? copiedIcon : copyIcon}
        alt="Copy Icon"
        className="copy-icon"
        onClick={handleCopy}
      />
    </div>
  );
};

export default CopyButton;
`;
