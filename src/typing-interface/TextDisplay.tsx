// TextDisplay.tsx
import React from "react";
import styles from "./TextDisplay.module.css"; // Import CSS Modules styles

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
            key={index}
            className={
              spellCheck(index) ? styles.correctChar : styles.incorrectChar
            }
          >
            {char}
          </span>
        ))}
      </span>
      <span>{part2}</span>
    </div>
  );
};

export default TextDisplay;
