import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faKeyboard,
  faCog,
  faInfoCircle,
  faPencilAlt,
  faMask,
  faPen,
  faAlignLeft,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nv">
      <div className="logo">
        <FontAwesomeIcon className="terminalIcon" icon={faMask} />
        <h1 className="nvTitle">TypeMime</h1>
      </div>
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
