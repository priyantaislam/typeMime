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

  const part2Words = part2.split(" ");
  const firstWord = part2Words[0];
  const remainingWords = part2Words.slice(1).join(" ");

  return (
    <div className={`${styles.textDisplay} ${blur ? styles.blurred : ""}`}>
      <span>
        {part1.split("").map((char, index) => (
          <span
            key={`part1_${index}`}
            className={
              spellCheck(index) ? styles.correctChar : styles.incorrectChar
            }
          >
            {char}
          </span>
        ))}
        <span className={styles.underlinedWord}>{firstWord}</span>
        {remainingWords && ` ${remainingWords}`}{" "}
      </span>
    </div>
  );
};

export default TextDisplay;
