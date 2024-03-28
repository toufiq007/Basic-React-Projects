/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import Timer from "./components/Timer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(!isStart);
    }
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else if (id === "seconds") {
      setSeconds(value);
    }

    console.log(id, value);
  };
  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, timerId);
  };

  // const runTimer = (sec, min, hr, tId) => {
  //   if (sec > 0) {
  //     setSeconds((s) => s - 1);
  //   } else if (sec === 0 && min > 0) {
  //     setSeconds(59);
  //     setMinutes((m) => m - 1);
  //   } else if (min === 0 && hr > 0) {
  //     setMinutes(59);
  //     setSeconds(59);
  //     setHours((h) => h - 1);
  //   } else if (sec === 0 && min === 0 && hr === 0) {
  //     handleReset();
  //   }
  // };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      handleReset();
      alert("Timer is finished");
      return;
    }
  };

  useEffect(() => {
    let tId;
    if (isStart) {
      tId = setInterval(() => {
        runTimer(seconds, minutes, hours, tId);
      }, 1000);
      setTimerId(tId);
    }
    return () => {
      clearInterval(tId);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <>
      <div className="h-[40vh] flex justify-center align-middle flex-col">
        <h1 className="font-semibold mb-[2rem]">CountDown Timer</h1>
        {isStart ? (
          <Timer
            setIsStart={setIsStart}
            isStart={isStart}
            handleReset={handleReset}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isPaused={isPaused}
            handlePause={handlePause}
            handleResume={handleResume}
          />
        ) : (
          <CountDown
            setIsStart={setIsStart}
            isStart={isStart}
            handleChange={handleChange}
            handleStart={handleStart}
          />
        )}
      </div>
    </>
  );
}

export default App;
