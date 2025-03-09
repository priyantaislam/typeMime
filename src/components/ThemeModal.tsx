import React, { useState } from "react";
import styles from "./ThemeModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTimes, faCog } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import themes from "../data/themes.json";

const ThemeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (themeClass: string) => {
    setTheme(themeClass);
  };

  return (
    <div>
      <button className={styles.modalToggle} onClick={toggleModal}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faCog} />
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={toggleModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className={styles.infoTextHeader}>Select Theme</h2>
            <div className={styles.themeGrid}>
              {themes.map((theme) => (
                <div
                  key={theme.class}
                  className={styles.themeCard}
                  onClick={() => handleThemeChange(theme.class)}
                >
                  {theme.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeModal;
