// TimerModal.tsx
import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css"; // Import CSS Modules styles
import { useTheme } from "../context/ThemeContext";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
  text: string;
}

const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onRequestClose,
  inputValue,
  text,
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
          {inputValue.trim().split(/\s+/).length * 4}
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

export default TimerModal;
