import "./InputArea.css";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

function InputArea() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    console.log("am I ever here");
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const divStyle = {
    filter: isInputFocused ? "none" : "blur(5px)",
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [text, setText] = useState(
    "apple under bicycle they dream beside funny his kitchen it river on sunshine her book chair garden between music laptop she window their ocean apple under bicycle they dream beside beside funny his kitchen"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    console.log(value);
  };

  useEffect(() => {}, []);

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
    <div className="inputArea">
      <div
        className={`text-container ${
          isInputFocused ? "no-blur" : "blur-effect"
        }`}
      >
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
        <span className="blinking-cursor"></span>
        <span>{part2}</span>
      </div>
      <input
        type="text"
        className="invisible-input"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default InputArea;
