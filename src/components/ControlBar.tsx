import "./ControlBar.css";
import {
  faClock,
  faFont,
  faQuoteLeft,
  faHashtag,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ControlBar: React.FC = () => {
  // Set default selected options
  const [selectedOption, setSelectedOption] = useState<string>("time");
  const [selectedNumber, setSelectedNumber] = useState<string>("15");
  const [isNumberOn, setNumberOn] = useState(false);
  const [isPunctuationOn, setIsPunctuationOn] = useState(false);

  const handleNumberClick = () => {
    setNumberOn(!isNumberOn);
  };

  const handlePunctuationClick = () => {
    setIsPunctuationOn(!isPunctuationOn);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <div className="cb">
      <button
        className={`cbButton ${isPunctuationOn ? "selected" : ""}`}
        onClick={handlePunctuationClick}
      >
        <FontAwesomeIcon className="cbOptionIcon" icon={faAt} />
        <p className="cbButtonText">punctuation</p>
      </button>
      <button
        className={`cbButton ${isNumberOn ? "selected" : ""}`}
        onClick={handleNumberClick}
      >
        <FontAwesomeIcon className="cbOptionIcon" icon={faHashtag} />
        <p className="cbButtonText">numbers</p>
      </button>
      <div className="cbDivider"></div>
      <label
        className={`cbButton ${selectedOption === "time" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="option"
          value="time"
          checked={selectedOption === "time"}
          onChange={handleOptionChange}
          className="cbRadioButton"
        />
        <FontAwesomeIcon className="cbOptionIcon" icon={faClock} />
        <p className="cbButtonText">time</p>
      </label>
      <label
        className={`cbButton ${selectedOption === "words" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="option"
          value="words"
          checked={selectedOption === "words"}
          onChange={handleOptionChange}
          className="cbRadioButton"
        />
        <FontAwesomeIcon className="cbOptionIcon" icon={faFont} />
        <p className="cbButtonText">words</p>
      </label>
      <label
        className={`cbButton ${selectedOption === "zen" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="option"
          value="zen"
          checked={selectedOption === "zen"}
          onChange={handleOptionChange}
          className="cbRadioButton"
        />
        <FontAwesomeIcon className="cbOptionIcon" icon={faQuoteLeft} />
        <p className="cbButtonText">quote</p>
      </label>
      <div className="cbDivider"></div>
      <label
        className={`cbButton ${selectedNumber === "15" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="number"
          value="15"
          checked={selectedNumber === "15"}
          onChange={handleNumberChange}
          className="cbRadioButton"
        />
        <p className="cbButtonText">15</p>
      </label>
      <label
        className={`cbButton ${selectedNumber === "30" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="number"
          value="30"
          checked={selectedNumber === "30"}
          onChange={handleNumberChange}
          className="cbRadioButton"
        />
        <p className="cbButtonText">30</p>
      </label>
      <label
        className={`cbButton ${selectedNumber === "45" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="number"
          value="45"
          checked={selectedNumber === "45"}
          onChange={handleNumberChange}
          className="cbRadioButton"
        />
        <p className="cbButtonText">45</p>
      </label>
    </div>
  );
};

export default ControlBar;
