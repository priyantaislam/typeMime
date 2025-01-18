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

  // Split part2 into words
  const part2Words = part2.split(" ");
  const firstWord = part2Words[0]; // Get the first word
  const remainingWords = part2Words.slice(1).join(" "); // Join the remaining words

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
        {/* Render the first word of part2 with an underline */}
        <span className={styles.underlinedWord}>{firstWord}</span>
        {remainingWords && ` ${remainingWords}`}{" "}
        {/* Render remaining words if they exist */}
      </span>
    </div>
  );
};

export default TextDisplay;
