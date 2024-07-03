import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import "./InputArea.css";
import Modal from "react-modal";

const InputArea: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue && !timerStarted) {
      // Start the timer only once when inputValue changes for the first time
      setTimer(15); // Set timer to 10 seconds, you can adjust this
      setTimerStarted(true);
    }
  }, [inputValue, timerStarted]);

  useEffect(() => {
    if (timerStarted && timer !== null) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer !== null) {
            if (prevTimer > 0) {
              return prevTimer - 1;
            } else {
              clearInterval(intervalRef.current as NodeJS.Timeout);
              //setTimerStarted(false);
              setIsModalOpen(true);
              setTimer(null);
              return 0;
            }
          }
          return null;
        });
      }, 1000);

      // Cleanup interval on component unmount
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [timerStarted, timer]);

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

  const text =
    "apple under bicycle they dream beside funny his kitchen it river on sunshine her book chair garden between music laptop she window their ocean apple under bicycle they dream beside beside funny his kitchen";
  const part1 = text.slice(0, inputValue.length);
  const part2 = text.slice(inputValue.length);

  const spellCheck = (index: number) => inputValue[index] === part1[index];

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Reload the page when modal is closed
  };

  return (
    <div>
      {!isInputFocused && !isModalOpen && (
        <div className="focus-container">
          <CenterFocusStrongIcon className="focus-icon" />
          <div className="focus-label">focus to start typing</div>
        </div>
      )}
      {timer !== null && <div className="timer-container">{timer}</div>}

      <div className="inputArea">
        <div className={`text-container ${isInputFocused ? "" : "blurred"}`}>
          <span>
            {part1.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  color: spellCheck(index) ? "#c5c6c1" : "#c52e42",
                  textDecoration: spellCheck(index) ? "none" : "underline",
                  textUnderlineOffset: spellCheck(index) ? "0px" : "8px",
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span>{part2}</span>
        </div>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Timer Ended"
        className="ModalOverlay" // Apply the overlay class
        overlayClassName="ModalOverlay" // Apply the overlay class
      >
        <div className="ModalContent">
          <h3 className="modal-heading">wpm</h3>
          <h2 className="modal-stat">
            {inputValue.trim().split(/\s+/).length * 4}
          </h2>
          <h3 className="modal-heading">acc</h3>
          <h2 className="modal-stat">97%</h2>
          <button className="CloseButton" onClick={closeModal}>
            X
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default InputArea;
