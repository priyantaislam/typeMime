// TimerModal.tsx
import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import { useTheme } from "../context/ThemeContext";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
  text: string;
  timerValue: number;
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
}) => {
  const { currentTheme } = useTheme();
  const accuracy = (text: string, input: string) => {
    const length = Math.min(text.length, input.length);
    let matches = 0;

    for (let i = 0; i < length; i++) {
      if (text[i] === input[i]) {
        matches++;
      }
    }

    return Math.round((matches / length) * 100);
  };

  //calculate the wpm here based on timerValue

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timer Ended"
      className={`${styles.modalOverlay} ${currentTheme}`}
      overlayClassName={`${styles.modalOverlay} ${currentTheme}`}
    >
      <div className={styles.modalContent}>
        <h3 className={styles.modalHeading}>wpm</h3>
        <h2 className={styles.modalStat}>
          {Math.floor(
            (inputValue.trim().split(/\s+/).length / timerValue) * 60
          )}
        </h2>
        <h3 className={styles.modalHeading}>acc</h3>
        <h2 className={styles.modalStat}>{accuracy(text, inputValue)}%</h2>
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
