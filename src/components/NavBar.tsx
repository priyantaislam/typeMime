import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faKeyboard,
  faCog,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nv">
      <FontAwesomeIcon className="terminalIcon" icon={faTerminal} />
      <h1 className="nvTitle">TypeDash</h1>
      <button className="nvButton">
        <FontAwesomeIcon className="nvOptionIcon" icon={faKeyboard} />
      </button>
      <button className="nvButton">
        <FontAwesomeIcon className="nvOptionIcon" icon={faCog} />
      </button>
      <button className="nvButton">
        <FontAwesomeIcon className="nvOptionIcon" icon={faInfoCircle} />
      </button>
    </div>
  );
}

export default NavBar;
