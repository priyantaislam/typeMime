// InputArea.tsx
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import "./InputArea.css"; // Ensure you import the CSS file
import TimerModal from "../components/Modal";
import TextDisplay from "./TextDisplay";
import FocusInstructions from "./FocusInstruction";
import { useTimer } from "../hooks/useTimer";

const InputArea: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const text =
    "apple under bicycle they dream beside funny his kitchen it river on sunshine her book chair garden between music laptop she window their ocean apple under bicycle they dream beside beside funny his kitchen";

  const { timer, startTimer, timerStarted } = useTimer(15, () =>
    setIsModalOpen(true)
  );

  useEffect(() => {
    if (inputValue && !timerStarted) {
      startTimer();
    }
  }, [inputValue]);

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
    <div>
      {!isInputFocused && !isModalOpen && <FocusInstructions />}
      {timer !== null && <div className="timer-container">{timer}</div>}

      <div className="inputArea">
        <TextDisplay
          inputValue={inputValue}
          text={text}
          blur={!isInputFocused}
        />
        <input
          type="text"
          ref={inputRef}
          className="invisible-input"
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
      />
    </div>
  );
};

export default InputArea;
