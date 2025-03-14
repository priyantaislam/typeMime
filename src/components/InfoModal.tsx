import React from "react";
import Modal from "react-modal";
import styles from "./InfoModal.module.css";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faListAlt,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
  const { currentTheme } = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timer Ended"
      className={`${styles.modalOverlay} ${currentTheme}`}
      overlayClassName={`${styles.modalOverlay} ${currentTheme}`}
      shouldCloseOnOverlayClick={true}
    >
      <div className={styles.modalContent}>
        <p className={styles.infoTextHeader}>
          <FontAwesomeIcon className={styles.optionIcon} icon={faInfoCircle} />
          About
        </p>
        <p className={styles.infoText}>
          TypeMime is a speed typing app built in React Typescript inspired by
          MonkeyType. It allows users to test their typing speed and accuracy.
        </p>
        <p className={styles.infoTextSubHeader}>
          <FontAwesomeIcon className={styles.optionIcon} icon={faListAlt} />{" "}
          Word Set
        </p>
        <p className={styles.infoText}>
          By default, the test uses a word set of 200 most common English words.
          The word sets can be modified.
        </p>
        <p className={styles.infoTextSubHeader}>
          <FontAwesomeIcon className={styles.optionIcon} icon={faChartBar} />{" "}
          Stat
        </p>
        <p className={styles.infoText}>wpm - words per minute</p>
        <p className={styles.infoText}>
          acc - percentage of correctly typed characters
        </p>
        <p className={styles.infoText}>words - total words typed</p>
        <p className={styles.infoTextSubHeader}>
          <FontAwesomeIcon className={styles.optionIcon} icon={faGithub} />{" "}
          Github
        </p>
        <p className={styles.infoText}>
          Check out the source code on{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoText}
          >
            GitHub
          </a>
        </p>
        <button className={styles.closeButton} onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export { InfoModal };
