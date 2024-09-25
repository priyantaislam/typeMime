import React from "react";
import styles from "./TextDisplay.module.css";

interface TextDisplayProps {
  inputValue: string;
  text: string;
  blur: boolean;
}

const TextDisplay: React.FC<TextDisplayProps> = ({
  inputValue,
  text,
  blur,
}) => {
  const part1 = text.slice(0, inputValue.length);
  const part2 = text.slice(inputValue.length);

  const spellCheck = (index: number) => inputValue[index] === part1[index];

  return (
    <div className={`${styles.textDisplay} ${blur ? styles.blurred : ""}`}>
      <span>
        {part1.split("").map((char, index) => (
          <span
            key={`part1_${index}`} // Ensure unique key for part1
            className={
              spellCheck(index) ? styles.correctChar : styles.incorrectChar
            }
          >
            {char}
          </span>
        ))}
        {part2 && ( // Check if there's any part2 text
          <span>
            <span className={styles.cursor}>{part2[0]}</span>
            {part2.slice(1)}
          </span>
        )}
      </span>
    </div>
  );
};

export default TextDisplay;
