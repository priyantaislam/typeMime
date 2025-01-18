import React, { useState } from "react";
import styles from "./ControlBar.module.css";
import {
  faClock,
  faFont,
  faQuoteLeft,
  faHashtag,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeContext";

interface Props {
  setTimerValue: React.Dispatch<React.SetStateAction<number>>;
  setWordLimit: React.Dispatch<React.SetStateAction<number>>;
  setIsTimerMode: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerMode: boolean;
}

const ControlBar: React.FC<Props> = ({
  setTimerValue,
  setIsTimerMode,
  setWordLimit,
  isTimerMode,
}) => {
  // Set default selected options
  const { currentTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<string>("time");
  const [selectedNumber, setSelectedNumber] = useState<string>("");
  const [isNumberOn, setNumberOn] = useState(false);
  const [isPunctuationOn, setIsPunctuationOn] = useState(false);

  const handleNumberClick = () => {
    setNumberOn(!isNumberOn);
  };

  const handlePunctuationClick = () => {
    setIsPunctuationOn(!isPunctuationOn);
    //logic
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    event.target.value === "time"
      ? setIsTimerMode(true)
      : setIsTimerMode(false);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNumber(event.target.value);

    if (event.target.value === "1") {
      isTimerMode ? setTimerValue(15) : setWordLimit(50);
    } else if (event.target.value === "2") {
      isTimerMode ? setTimerValue(30) : setWordLimit(75);
    } else {
      isTimerMode ? setTimerValue(60) : setWordLimit(100);
    }
  };

  return (
    <div className={`${styles.container} ${currentTheme}`}>
      <div className={`${styles.innerContainer} ${currentTheme}`}>
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
        <div className={styles.divider}></div>
        <label
          className={`${styles.button} ${
            selectedNumber === "1" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name="number"
            value="1"
            defaultChecked
            checked={selectedNumber === "1"}
            onChange={handleNumberChange}
            className={styles.radioButton}
          />
          <p className={styles.buttonText}>{isTimerMode ? 15 : 50}</p>
        </label>
        <label
          className={`${styles.button} ${
            selectedNumber === "2" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name="number"
            value="2"
            checked={selectedNumber === "2"}
            onChange={handleNumberChange}
            className={styles.radioButton}
          />
          <p className={styles.buttonText}>{isTimerMode ? 30 : 75}</p>
        </label>
        <label
          className={`${styles.button} ${
            selectedNumber === "3" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name="number"
            value="3"
            checked={selectedNumber === "3"}
            onChange={handleNumberChange}
            className={styles.radioButton}
          />
          <p className={styles.buttonText}>{isTimerMode ? 60 : 100}</p>
        </label>
      </div>
    </div>
  );
};

export default ControlBar;
