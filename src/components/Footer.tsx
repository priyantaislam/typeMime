import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Optionally, you can style your footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
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
          <FontAwesomeIcon icon={faCode} className="source-code-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
