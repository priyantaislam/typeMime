import React, { useState } from "react";
import styles from "./ControlBar.module.css"; // Import CSS Modules styles
import {
  faClock,
  faFont,
  faQuoteLeft,
  faHashtag,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeContext";

const ControlBar: React.FC = () => {
  // Set default selected options
  const { currentTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<string>("time");
  const [selectedNumber, setSelectedNumber] = useState<string>("15");
  const [isNumberOn, setNumberOn] = useState(false);
  const [isPunctuationOn, setIsPunctuationOn] = useState(false);

  const handleNumberClick = () => {
    setNumberOn(!isNumberOn);
  };

  const handlePunctuationClick = () => {
    setIsPunctuationOn(!isPunctuationOn);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <div className={`${styles.container} ${currentTheme}`}>
      <button
        className={`${styles.button} ${isPunctuationOn ? styles.selected : ""}`}
        onClick={handlePunctuationClick}
      >
        <FontAwesomeIcon className={styles.icon} icon={faAt} />
        <p className={styles.buttonText}>punctuation</p>
      </button>
      <button
        className={`${styles.button} ${isNumberOn ? styles.selected : ""}`}
        onClick={handleNumberClick}
      >
        <FontAwesomeIcon className={styles.icon} icon={faHashtag} />
        <p className={styles.buttonText}>numbers</p>
      </button>
      <div className={styles.divider}></div>
      <label
        className={`${styles.button} ${
          selectedOption === "time" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="option"
          value="time"
          checked={selectedOption === "time"}
          onChange={handleOptionChange}
          className={styles.radioButton}
        />
        <FontAwesomeIcon className={styles.icon} icon={faClock} />
        <p className={styles.buttonText}>time</p>
      </label>
      <label
        className={`${styles.button} ${
          selectedOption === "words" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="option"
          value="words"
          checked={selectedOption === "words"}
          onChange={handleOptionChange}
          className={styles.radioButton}
        />
        <FontAwesomeIcon className={styles.icon} icon={faFont} />
        <p className={styles.buttonText}>words</p>
      </label>
      <label
        className={`${styles.button} ${
          selectedOption === "zen" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="option"
          value="zen"
          checked={selectedOption === "zen"}
          onChange={handleOptionChange}
          className={styles.radioButton}
        />
        <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
        <p className={styles.buttonText}>quote</p>
      </label>
      <div className={styles.divider}></div>
      <label
        className={`${styles.button} ${
          selectedNumber === "15" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="number"
          value="15"
          checked={selectedNumber === "15"}
          onChange={handleNumberChange}
          className={styles.radioButton}
        />
        <p className={styles.buttonText}>15</p>
      </label>
      <label
        className={`${styles.button} ${
          selectedNumber === "30" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="number"
          value="30"
          checked={selectedNumber === "30"}
          onChange={handleNumberChange}
          className={styles.radioButton}
        />
        <p className={styles.buttonText}>30</p>
      </label>
      <label
        className={`${styles.button} ${
          selectedNumber === "45" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="number"
          value="45"
          checked={selectedNumber === "45"}
          onChange={handleNumberChange}
          className={styles.radioButton}
        />
        <p className={styles.buttonText}>45</p>
      </label>
    </div>
  );
};

export default ControlBar;
