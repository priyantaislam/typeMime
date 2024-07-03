// TextDisplay.tsx
import React from "react";
import "./TextDisplay.css"; // Ensure you import the CSS file

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
    <div className={`text-display ${blur ? "blurred" : ""}`}>
      <span>
        {part1.split("").map((char, index) => (
          <span
            key={index}
            className={spellCheck(index) ? "correct-char" : "incorrect-char"}
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
