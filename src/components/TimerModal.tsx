import React from "react";
import Modal from "react-modal";
import styles from "./TimerModal.module.css";
import { useTheme } from "../context/ThemeContext";
import { accuracy } from "../helpers/accuracy";
import LineGraph from "./LineGraph";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
  text: string;
  timerValue: number;
  correctChars: number;
  totalChars: number;
  wordsPerSecond: number[];
}

const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onRequestClose,
  inputValue,
  text,
  timerValue,
  correctChars,
  totalChars,
  wordsPerSecond,
}) => {
  const { currentTheme } = useTheme();
  // Calculate WPM and accuracy
  const wordCount = wordsPerSecond[wordsPerSecond.length - 1];
  const wpm =
    timerValue === 60
      ? wordCount
      : timerValue === 30
      ? wordCount * 2
      : wordCount * 4;

  const accuracyValue = accuracy(text, inputValue, correctChars, totalChars);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timer Ended"
      className={`${styles.modalOverlay} ${currentTheme}`}
      overlayClassName={`${styles.modalOverlay} ${currentTheme}`}
    >
      <div className={styles.timerModalContent}>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <div className={styles.modalHeading}>wpm</div>
            <div className={styles.modalStat}>{wpm}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.modalHeading}>acc</div>
            <div className={styles.modalStat}>{accuracyValue}%</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.modalHeading}>words</div>
            <div className={styles.modalStat}>{wordCount}</div>
          </div>
        </div>

        <div className={styles.graphContainer}>
          <LineGraph wordsPerSecond={wordsPerSecond} />
        </div>

        <button className={styles.closeButton} onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export { TimerModal };
