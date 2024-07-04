import React, { useState } from "react";
import styles from "./Dropdown.module.css"; // Import CSS Module for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faKeyboard,
  faCog,
  faInfoCircle,
  faMask,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickRoot = () => {
    setTheme("root");
    setIsOpen(!isOpen);
  };

  const onClickLight = () => {
    setTheme("light-theme");
    setIsOpen(!isOpen);
  };

  const onClickDark = () => {
    setTheme("dark-theme");
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={toggleMenu}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faPaintBrush} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={onClickRoot}>Default</li>
          <li onClick={onClickLight}>Light</li>
          <li onClick={onClickDark}>Dark</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
