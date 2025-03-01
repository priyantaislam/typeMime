import React, { useState } from "react";
import styles from "./ControlBar.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeContext";

interface Props {
  setTimerValue: React.Dispatch<React.SetStateAction<number>>;
  disableControlBar: boolean;
}

const ControlBar: React.FC<Props> = ({ setTimerValue, disableControlBar }) => {
  const { currentTheme } = useTheme();
  const [selectedNumber, setSelectedNumber] = useState<string>("1");

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedNumber(value);

    if (value === "1") {
      setTimerValue(15);
    } else if (value === "2") {
      setTimerValue(30);
    } else {
      setTimerValue(60);
    }
  };

  return (
    <div
      className={`${styles.container} ${currentTheme} ${
        disableControlBar ? styles.disabled : ""
      }`}
    >
      <div className={`${styles.innerContainer} ${currentTheme}`}>
        <label className={`${styles.button} ${styles.selected}`}>
          <input
            type="radio"
            name="option"
            value="time"
            checked={true}
            className={styles.radioButton}
            disabled={disableControlBar}
          />
          <FontAwesomeIcon className={styles.icon} icon={faClock} />
          <p className={styles.buttonText}>time</p>
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
            checked={selectedNumber === "1"}
            onChange={handleNumberChange}
            className={styles.radioButton}
            disabled={disableControlBar}
          />
          <p className={styles.buttonText}>15</p>
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
            disabled={disableControlBar}
          />
          <p className={styles.buttonText}>30</p>
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
            disabled={disableControlBar}
          />
          <p className={styles.buttonText}>60</p>
        </label>
      </div>
    </div>
  );
};

export default ControlBar;
