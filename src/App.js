import { useState } from "react";
import "./App.css";
import {
  FaArrowDown,
  FaArrowUp,
  FaPause,
  FaPlay,
  FaSyncAlt,
} from "react-icons/fa";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const handleSessionUp = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  const handleSessionDown = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const handleBreakUp = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleBreakDown = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <div className="App">
      <h1 id="main-title">Pomodoro Clock</h1>
      <div className="labels">
        <div className="break-session">
          <h3 id="break-label">Break Length</h3>
          <div className="seedha">
            <FaArrowDown className="aruuba" onClick={handleBreakDown} />
            <div className="aruuba nom">{breakLength}</div>
            <FaArrowUp className="aruuba" onClick={handleBreakUp} />
          </div>
        </div>
        <div className="break-session">
          <h3 id="session-label">Session Length</h3>
          <div className="seedha">
            <FaArrowDown className="aruuba" onClick={handleSessionDown} />
            <div className="aruuba nom">{sessionLength}</div>
            <FaArrowUp className="aruuba" onClick={handleSessionUp} />
          </div>
        </div>
      </div>
      <div className="seedha">
        <div className="timer">
          <div id="timer-label">Session</div>
          <div id="time-left">01:00</div>
        </div>
      </div>
      <div className="timer-control seedha">
        <FaPlay />
        <FaPause />
        <FaSyncAlt />
      </div>
    </div>
  );
}

export default App;
