// TimerModal.tsx
import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import { useTheme } from "../context/ThemeContext";
import { accuracy } from "../helpers/accuracy";
import LineGraph from "./LineGraph";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
  text: string;
  timerValue: number;
  currentWordCount: number;
  correctChars: number;
  totalChars: number;
  wordsPerSecond: number[];
}

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onRequestClose,
  inputValue,
  text,
  timerValue,
  currentWordCount,
  correctChars,
  totalChars,
  wordsPerSecond,
}) => {
  const { currentTheme } = useTheme();
  // Calculate WPM and accuracy
  const wordCount = (inputValue.match(/\b\w+\b/g) || []).length;
  const wpm = Math.floor((wordCount / timerValue) * 60);
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
        </div>

        <LineGraph wordsPerSecond={wordsPerSecond} />

        <button className={styles.closeButton} onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
  const { currentTheme } = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timer Ended"
      className={`${styles.modalOverlay} ${currentTheme}`}
      overlayClassName={`${styles.modalOverlay} ${currentTheme}`}
    >
      <div className={styles.modalContent}>
        <h3 className={styles.infoTextHeader}>About TypeMime</h3>
        <p className={styles.infoText}>
          TypeMime is a speed typing app built in React Typescript inspired by
          MonkeyType. It allows users to test their typing speed and accuracy.
        </p>
        <button className={styles.closeButton} onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export { TimerModal, InfoModal };
