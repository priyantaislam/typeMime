// Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css"; // Import CSS Modules styles
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <footer className={`${styles.footer} ${currentTheme}`}>
      <div className={styles.footerIcons}>
        <a
          href="https://github.com/priyantaislam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/priyantaislam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/priyantaislam/typeDash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} className={styles.sourceCodeIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
