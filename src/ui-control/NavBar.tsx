import React from "react";
import styles from "./NavBar.module.css"; // Import CSS Modules styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faKeyboard,
  faCog,
  faInfoCircle,
  faMask,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import DropdownMenu from "../components/Dropdown";
import { InfoModal } from "../components/Modal";
import { useState } from "react";

const NavBar: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setTheme("light-theme");
  };

  const handleClickRefresh = () => {
    window.location.reload();
  };

  const handleClickInfo = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`${styles.bar} ${currentTheme}`}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.icon} icon={faMask} />
        <h1 className={styles.title}>TypeMime</h1>
      </div>
      <button className={styles.button} onClick={handleClickRefresh}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faKeyboard} />
      </button>
      <DropdownMenu />
      <button className={styles.button} onClick={handleClickInfo}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faInfoCircle} />
      </button>
      <InfoModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default NavBar;
