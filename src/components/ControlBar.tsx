import "./ControlBar.css";
import {
  faClock,
  faFont,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ControlBar() {
  return (
    <div className="cb">
      <button className="cbButton">
        <FontAwesomeIcon className="cbOptionIcon" icon={faClock} />
        <p className="cbButtonText">time</p>
      </button>
      <button className="cbButton">
        <FontAwesomeIcon className="cbOptionIcon" icon={faFont} />
        <p className="cbButtonText">words</p>
      </button>
      <button className="cbButton">
        <FontAwesomeIcon className="cbOptionIcon" icon={faQuoteLeft} />
        <p className="cbButtonText">zen</p>
      </button>
      <div className="cbDivider"></div>
      <button className="cbButton">
        <p className="cbButtonText">15</p>
      </button>
      <button className="cbButton">
        <p className="cbButtonText">30</p>
      </button>
      <button className="cbButton">
        <p className="cbButtonText">45</p>
      </button>
    </div>
  );
}

export default ControlBar;
