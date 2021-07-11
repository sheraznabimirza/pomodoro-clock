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
  const [timer, setTimer] = useState(false);

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

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
  };

  const handlePlayer = (e) => {
    const { innerText } = e.target;
    const eTarget = e.target.value;
    console.log(e.target.value);
    console.log(eTarget);
    console.log(innerText);
  };

  return (
    <div className="App">
      <h1 id="main-title">Pomodoro Clock</h1>
      <div className="labels">
        <div className="break-session">
          <h3 id="break-label">Break Length</h3>
          <div className="seedha">
            <FaArrowDown className="aruuba" onClick={handleBreakDown} />
            <span className="aruuba nom">{breakLength}</span>
            <FaArrowUp className="aruuba" onClick={handleBreakUp} />
          </div>
        </div>
        <div className="break-session">
          <h3 id="session-label">Session Length</h3>
          <div className="seedha">
            <FaArrowDown className="aruuba" onClick={handleSessionDown} />
            <span className="aruuba nom">{sessionLength}</span>
            <FaArrowUp className="aruuba" onClick={handleSessionUp} />
          </div>
        </div>
      </div>
      <div className="seedha">
        <div className="timer">
          <span id="timer-label">Session</span>
          <span id="time-left">{sessionLength}:00</span>
        </div>
      </div>
      <div className="timer-control seedha">
        <FaPlay value={2} className="player" onClick={handlePlayer} />
        <FaPause value={false} className="player" onClick={handlePlayer} />
        <FaSyncAlt onClick={handleReset} className="player" />
      </div>
    </div>
  );
}

export default App;
