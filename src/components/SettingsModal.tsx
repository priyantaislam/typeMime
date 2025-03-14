import React, { useState } from "react";
import styles from "./SettingsModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import themes from "../data/themes.json";
import sounds from "../data/sounds.json";
import languages from "../data/languages.json";
import { useSound } from "../context/SoundContext";
import { useLanguage } from "../context/LanguageContext";

const SettingsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string>(
    localStorage.getItem("sound") || "click"
  );
  const [selectedTheme, setSelectedTheme] = useState<string>(
    localStorage.getItem("theme") || "default"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem("language") || "english"
  );
  const { setTheme } = useTheme();
  const { sound, setSound } = useSound();
  const { language, setLanguage } = useLanguage();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (themeClass: string) => {
    setTheme(themeClass);
    setSelectedTheme(themeClass);
  };

  const handleSoundChange = (sound: string) => {
    setSelectedSound(sound);
    setSound(sound);
  };

  const handleLanguageChange = (languageKey: string) => {
    setSelectedLanguage(languageKey);
    setLanguage(languageKey);
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

              <h2
                className={styles.infoTextHeader}
                style={{ marginTop: "2vh" }}
              >
                Language
              </h2>
              <div className={styles.languageGrid}>
                {Object.entries(languages).map(
                  ([languageKey, languageName]) => (
                    <div
                      key={languageKey}
                      className={`${styles.languageCard} ${
                        selectedLanguage === languageKey ? styles.selected : ""
                      }`}
                      onClick={() => handleLanguageChange(languageKey)}
                    >
                      {languageName}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsModal;
