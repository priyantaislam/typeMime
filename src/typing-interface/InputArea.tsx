import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import styles from "./InputArea.module.css";
import { TimerModal } from "../components/Modal";
import TextDisplay from "./TextDisplay";
import FocusInstructions from "./FocusInstruction";
import { useTimer } from "../hooks/useTimer";
import { useTheme } from "../context/ThemeContext";

interface Props {
  timerValue: number;
  setDisableControlBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputArea: React.FC<Props> = ({ timerValue, setDisableControlBar }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const { currentTheme } = useTheme();

  const { timer, startTimer, timerStarted } = useTimer(
    timerValue,
    () => setIsModalOpen(true),
    setDisableControlBar
  );

  const getRandomWords = (wordList: string[], num: number) => {
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).join(" ");
  };

  useEffect(() => {
    if (inputValue && !timerStarted) {
      startTimer();
    }
  }, [inputValue]);

  useEffect(() => {
    fetch("/words.json")
      .then((response) => response.json())
      .then((data) => {
        const randomWords = getRandomWords(data.words, 50); // Fetch 50 random words
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
    window.location.reload();
  };

  return (
    <div className={currentTheme}>
      {!isInputFocused && !isModalOpen && <FocusInstructions />}
      {timer !== null && <div className={styles.timerContainer}>{timer}</div>}

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
