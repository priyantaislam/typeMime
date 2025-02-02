import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import styles from "./InputArea.module.css";
import { TimerModal } from "../components/Modal";
import TextDisplay from "./TextDisplay";
import FocusInstructions from "./FocusInstruction";
import { useTimer } from "../hooks/useTimer";
import { useTheme } from "../context/ThemeContext";

interface Props {
  timerValue: number;
  isTimerMode: boolean;
  wordLimit: number;
}
const InputArea: React.FC<Props> = ({ timerValue, wordLimit, isTimerMode }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);
  const { currentTheme } = useTheme();

  const { timer, startTimer, timerStarted } = useTimer(timerValue, () =>
    setIsModalOpen(true)
  );

  const getRandomWords = (wordList: string[], num: number) => {
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).join(" ");
  };

  useEffect(() => {
    if (inputValue && !timerStarted && isTimerMode) {
      startTimer();
    }

    if (!isTimerMode) {
      const wordArray = inputValue.trim().split(/\s+/);
      setWordCount(inputValue.trim() === "" ? 0 : wordArray.length);
    }
  }, [inputValue]);

  useEffect(() => {
    fetch("/words.json")
      .then((response) => response.json())
      .then((data) => {
        const randomWords = getRandomWords(data.words, 45); // Fetch 45 random words
        setText(randomWords);
      });
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const cursorPosition = event.currentTarget.selectionStart;
    if (
      event.key === "Backspace" &&
      cursorPosition !== null &&
      text[cursorPosition - 1] === " "
    ) {
      event.preventDefault();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Reload the page when modal is closed
  };

  return (
    <div className={currentTheme}>
      {!isInputFocused && !isModalOpen && <FocusInstructions />}
      {timer !== null && isTimerMode && (
        <div className={styles.timerContainer}>{timer}</div>
      )}
      {!isTimerMode && inputValue !== "" && (
        <div className={styles.timerContainer}>
          {wordCount}/{wordLimit}
        </div>
      )}

      <div className={styles.inputArea}>
        <TextDisplay
          inputValue={inputValue}
          text={text}
          blur={!isInputFocused}
        />
        <input
          type="text"
          ref={inputRef}
          className={styles.invisibleInput}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={text.length}
        />
      </div>

      <TimerModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        inputValue={inputValue}
        text={text}
        timerValue={timerValue}
      />
    </div>
  );
};

export default InputArea;
