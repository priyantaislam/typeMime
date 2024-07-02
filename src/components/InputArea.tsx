import "./InputArea.css";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

function InputArea() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
    console.log("BLUR");
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [text, setText] = useState(
    "apple under bicycle they dream beside funny his kitchen it river on sunshine her book chair garden between music laptop she window their ocean apple under bicycle they dream beside beside funny his kitchen"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    //console.log(value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Split text based on input length
  const splitIndex = inputValue.length;
  const part1 = text.slice(0, splitIndex);
  const part2 = text.slice(splitIndex);

  const spellCheck = (index: number) => {
    return inputValue[index] === part1[index];
  };

  const containerStyle = {
    // Define common styles inline
    padding: "20px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    // Conditional blur effect based on input focus
    filter: isInputFocused ? "none" : "blur(5px)",
  };

  return (
    <div>
      {!isInputFocused && (
        <div className="focus-container">
          <CenterFocusStrongIcon className="focus-icon" />
          <div className="focus-label">focus to start typing</div>
        </div>
      )}

      <div className="inputArea">
        <div className={`text-container ${isInputFocused ? "" : "blurred"}`}>
          <span>
            {part1.split("").map((char, index) => (
              <span
                key={index}
                style={{ color: spellCheck(index) ? "#c5c6c1" : "#c52e42" }}
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
        />
      </div>
    </div>
  );
}

export default InputArea;
