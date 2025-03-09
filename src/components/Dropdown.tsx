import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import themes from "../data/themes.json";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (themeClass: string) => {
    setTheme(themeClass);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={toggleMenu}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faCog} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {themes.map((theme) => (
            <li
              key={theme.class}
              onClick={() => handleThemeChange(theme.class)}
            >
              {theme.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
