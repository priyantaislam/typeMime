import "./InputArea.css";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

function InputArea() {
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

  return (
    <div className="inputArea">
      <div className="text-container">
        <span style={{ color: "#bca441" }}>{part1}</span>
        <span className="blinking-cursor"></span>
        <span>{part2}</span>
      </div>
      <input
        type="text"
        className="invisible-input"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputArea;
