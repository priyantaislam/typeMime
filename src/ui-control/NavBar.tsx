import React from "react";
import styles from "./NavBar.module.css"; // Import CSS Modules styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faKeyboard,
  faCog,
  faInfoCircle,
  faMask,
} from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.icon} icon={faMask} />
        <h1 className={styles.title}>TypeMime</h1>
      </div>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faKeyboard} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faCog} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faInfoCircle} />
      </button>
    </div>
  );
};

export default NavBar;
