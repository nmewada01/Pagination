import React from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [watch, setWatch] = useState(null);
  const [timerId, setTimerId] = useState(0);

  const start = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    setTimerId(null)
  };
  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
    setTimerId(null)
  };
  return (
    <div>
      <h1 className="green">Stopwatch: {watch}</h1>

      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};

export default Stopwatch;
