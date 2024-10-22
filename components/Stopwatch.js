// Stopwatch.js
import React, { useState, useRef } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (running) {
      setRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={start} disabled={running}>Start</button>
        <button onClick={stop} disabled={!running}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
