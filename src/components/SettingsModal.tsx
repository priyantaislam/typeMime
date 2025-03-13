import React, { useState } from "react";
import styles from "./SettingsModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import themes from "../data/themes.json";
import sounds from "../data/sounds.json";

interface Props {
  setSound: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsModal: React.FC<Props> = ({ setSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string>("none");
  const { setTheme } = useTheme();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (themeClass: string) => {
    setTheme(themeClass);
  };

  const handleSoundChange = (sound: string) => {
    setSelectedSound(sound);
    setSound(sound);
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
            <div className={styles.modalBody}>
              <h2 className={styles.infoTextHeader}>Theme</h2>
              <div className={styles.themeGrid}>
                {themes.map((theme) => (
                  <div
                    key={theme.class}
                    className={styles.themeCard}
                    onClick={() => handleThemeChange(theme.class)}
                    style={{
                      backgroundColor: theme.primaryColor1,
                      color: theme.secondaryColor1,
                      borderColor: theme.secondaryColor2,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.accentColor1;
                      e.currentTarget.style.borderColor = theme.accentColor1;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.secondaryColor1;
                      e.currentTarget.style.borderColor = theme.secondaryColor2;
                    }}
                  >
                    {theme.name}
                  </div>
                ))}
              </div>

              <h2
                className={styles.infoTextHeader}
                style={{ marginTop: "2vh" }}
              >
                Sound
              </h2>
              <div className={styles.soundGrid}>
                {sounds.map((sound) => (
                  <div
                    key={sound}
                    className={`${styles.soundCard} ${
                      selectedSound === sound ? styles.selected : ""
                    }`}
                    onClick={() => handleSoundChange(sound)}
                  >
                    {sound}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsModal;
