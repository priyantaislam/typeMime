import "./InputArea.css";
import React, { useState, ChangeEvent } from "react";
function InputArea() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="inputArea">
      <p className="inputParagraph">
        <span className="blinking-cursor"></span>
        The quick brown fox jumps over the lazy dog Swift zephyrs blow vexing
        daft Jim the quick brown fox jumps over the lazy dog Swift zephyrs blow
        vexing daft Jim the quick brown fox jumps over the lazy dog Swift
        zephyrs blow vexing daft Jim
      </p>
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
