// FocusInstructions.tsx
import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import "./FocusInstructions.css"; // Ensure you import the CSS file

const FocusInstructions: React.FC = () => (
  <div className="focus-instructions">
    <CenterFocusStrongIcon className="focus-icon" />
    <div className="focus-label">focus to start typing</div>
  </div>
);

export default FocusInstructions;
