// TimerModal.tsx
import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css"; // Import CSS Modules styles
import { useTheme } from "../context/ThemeContext";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
}

const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onRequestClose,
  inputValue,
}) => {
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
        <h3 className={styles.modalHeading}>wpm</h3>
        <h2 className={styles.modalStat}>
          {inputValue.trim().split(/\s+/).length * 4}
        </h2>
        <h3 className={styles.modalHeading}>acc</h3>
        <h2 className={styles.modalStat}>97%</h2>
        <button className={styles.closeButton} onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export default TimerModal;
