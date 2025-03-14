import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import styles from "./InputArea.module.css";
import { TimerModal } from "../components/TimerModal";
import TextDisplay from "./TextDisplay";
import FocusInstructions from "./FocusInstruction";
import { useTimer } from "../hooks/useTimer";
import { useTheme } from "../context/ThemeContext";
import { accuracy } from "../helpers/accuracy";
import { useSound } from "../context/SoundContext";
import { useLanguage } from "../context/LanguageContext";

/**
 * Main game loop is handled in this component
 * This component handles user input and display text
 * Updates the display text accordingly as user starts typing
 * Displays the end result when the timer runs down
 */

interface Props {
  timerValue: number;
  setDisableControlBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputArea: React.FC<Props> = ({ timerValue, setDisableControlBar }) => {
  const { sound } = useSound();
  const { language } = useLanguage();
  const { currentTheme } = useTheme();

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [totalInput, setTotalInput] = useState<string>("");
  const [wordsPerSecond, setWordsPerSecond] = useState<number[]>([]);
  const [prevInputLength, setPrevInputLength] = useState(0);
  const [totalCorrectChars, setTotalCorrectChars] = useState<number>(0);
  const [totalChars, setTotalChars] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef(new Audio(`/${sound}.wav`));

  useEffect(() => {
    audioRef.current.src = `/${sound}.wav`;
  }, [sound]);

  const { timer, startTimer, timerStarted } = useTimer(
    timerValue,
    () => {
      setIsModalOpen(true);
    },
    setDisableControlBar,
    setWordsPerSecond,
    totalInput
  );

  const getRandomWords = (wordList: string[], num: number) => {
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).join(" ");
  };

  useEffect(() => {
    if (inputValue && !timerStarted) {
      startTimer();
    }

    if (inputValue.length === text.length) {
      const roundAccuracy = accuracy(inputValue, text, 0, 0) / 100;
      const correctChars = Math.round(roundAccuracy * text.length);

      setTotalCorrectChars(totalCorrectChars + correctChars);
      setTotalChars(totalChars + text.length);

      setInputValue("");
      setTotalInput((prev) => prev + " ");

      fetch(`/${language}.json`)
        .then((response) => response.json())
        .then((data) => {
          const randomWords = getRandomWords(data.words, 25);
          setText(randomWords);
        });
    }
  }, [inputValue]);

  useEffect(() => {
    fetch(`/${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        const randomWords = getRandomWords(data.words, 25);
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

    const newChars = e.target.value.slice(prevInputLength);

    setTotalInput((prev) => prev + newChars);

    setPrevInputLength(e.target.value.length);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play error:", err));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const cursorPosition = event.currentTarget.selectionStart;

    if (event.key === " " && inputValue.length === 0) {
      event.preventDefault();
      return;
    }

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
        correctChars={totalCorrectChars}
        totalChars={totalChars}
        wordsPerSecond={wordsPerSecond}
      />
    </div>
  );
};

export default InputArea;
