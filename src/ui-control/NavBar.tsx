import React from "react";
import styles from "./NavBar.module.css"; // Import CSS Modules styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faInfoCircle,
  faMask,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import DropdownMenu from "../components/Dropdown";
import { InfoModal } from "../components/InfoModal";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal";

interface Props {
  setSound: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<Props> = ({ setSound }) => {
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
      <SettingsModal setSound={setSound} />
      <button className={styles.button} onClick={handleClickInfo}>
        <FontAwesomeIcon className={styles.optionIcon} icon={faInfoCircle} />
      </button>
      <InfoModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default NavBar;
