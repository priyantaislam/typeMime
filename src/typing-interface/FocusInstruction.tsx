import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import styles from "./FocusInstructions.module.css"; // Import CSS Modules styles

const FocusInstructions: React.FC = () => (
  <div className={`${styles.focusInstructions}`}>
    <CenterFocusStrongIcon className={styles.focusIcon} />
    <div className={styles.focusLabel}>focus to start typing</div>
  </div>
);

export default FocusInstructions;
