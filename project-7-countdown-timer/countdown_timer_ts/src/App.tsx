/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";
import InputTimer from "./components/InputTimer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState();
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (seconds < 0 || minutes < 0 || hours < 0) {
      alert("Please enter valid time");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else if (id === "seconds") {
      setSeconds(value);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    clearInterval(timerId);
  };

  const handlePaused = () => {
    setIsPaused(true);
    clearInterval(timerId);
    console.log("pause hoiche");
  };
  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  const runTimer = (s: number, m: number, h: number) => {
    if (s > 0) {
      setSeconds((s) => s - 1);
    } else if (s === 0 && m > 0) {
      setSeconds(59);
      setMinutes((m) => m - 1);
    } else if (m === 0 && h > 0) {
      setMinutes(59);
      setSeconds(59);
      setHours((h) => h - 1);
    } else if (s === 0 && m === 0 && h === 0) {
      handleReset();
      alert("timer is finished");
      return;
    }
  };

  useEffect(() => {
    let tId: any;
    if (isStart) {
      tId = setInterval(() => {
        runTimer(seconds, minutes, hours);
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
          <CountDownTimer
            handleReset={handleReset}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isPaused={isPaused}
            handlePause={handlePaused}
            handleResume={handleResume}
          />
        ) : (
          <InputTimer handleChange={handleChange} handleStart={handleStart} />
        )}
      </div>
    </>
  );
}

export default App;
