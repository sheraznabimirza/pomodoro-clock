import { useState, useEffect, useRef } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimer, setCurrentTimer] = useState("Session");
  const [daTime, setDaTime] = useState(25 * 60);

  let interval = useRef(null);

  const handleSessionUp = () => {
    if (sessionLength < 60 && !isPlaying) {
      setSessionLength(sessionLength + 1);
      if (currentTimer === "Session") {
        setDaTime((sessionLength + 1) * 60);
      }
    }
  };

  const handleSessionDown = () => {
    if (sessionLength > 1 && !isPlaying) {
      setSessionLength(sessionLength - 1);
      if (currentTimer === "Session") {
        setDaTime((sessionLength - 1) * 60);
      }
    }
  };

  const handleBreakUp = () => {
    if (breakLength < 60 && !isPlaying) {
      setBreakLength(breakLength + 1);
      if (currentTimer === "Break") {
        setDaTime((breakLength + 1) * 60);
      }
    }
  };

  const handleBreakDown = () => {
    if (breakLength > 1 && !isPlaying) {
      setBreakLength(breakLength - 1);
      if (currentTimer === "Break") {
        setDaTime((breakLength - 1) * 60);
      }
    }
  };

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
  };

  const handlePlayer = () => {
    setIsPlaying(true);
  };

  const handlePauser = () => {
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying && daTime > 0) {
      interval = setInterval(() => {
        setDaTime(daTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  const convertTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    handlePlayPause();
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, daTime]);

  const breakProps = {
    title: "Break Length",
    upFunc: handleBreakUp,
    downFunc: handleBreakDown,
    timerLength: breakLength,
  };

  const sessionProps = {
    title: "Session Length",
    upFunc: handleSessionUp,
    downFunc: handleSessionDown,
    timerLength: sessionLength,
  };

  return (
    <div className="App">
      <h1 id="main-title">Pomodoro Clock</h1>
      <div className="labels">
        <SeshBreak {...breakProps} />
        <SeshBreak {...sessionProps} />
      </div>
      <div className="seedha">
        <div className="timer">
          <span id="timer-label">{currentTimer}</span>
          <span id="time-left">{convertTime(daTime)}</span>
        </div>
      </div>
      <div className="timer-control seedha">
        <FaPlay className="player" onClick={handlePlayer} />
        <FaPause className="player" onClick={handlePauser} />
        <FaSyncAlt onClick={handleReset} className="player" />
      </div>
    </div>
  );
}

function SeshBreak(props) {
  return (
    <div className="break-session">
      <h2 id="break-label">{props.title}</h2>
      <div className="seedha">
        <FaArrowDown className="aruuba" onClick={props.downFunc} />
        <span className="aruuba nom">{props.timerLength}</span>
        <FaArrowUp className="aruuba" onClick={props.upFunc} />
      </div>
    </div>
  );
}

export default App;
