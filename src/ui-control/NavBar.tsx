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
import { useTheme } from "../context/ThemeContext";
import DropdownMenu from "../components/Dropdown";

const NavBar: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  console.log(currentTheme);

  const handleClick = () => {
    setTheme("light-theme");
  };

  return (
    <div className={`${styles.bar} ${currentTheme}`}>
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
      <DropdownMenu />
    </div>
  );
};

export default NavBar;
