/* eslint-disable react/prop-types */
const Timer = ({
  handleReset,
  hours,
  minutes,
  seconds,
  isPaused,
  handlePause,
  handleResume,
}) => {
  return (
    <div className="">
      <div className="inputContainer mb-9">
        <span className="text-8xl mx-3">
          {hours > 9 ? hours : `0${hours}`}:
        </span>
        <span className="text-8xl mx-3">
          {minutes > 9 ? minutes : `0${minutes}`}:
        </span>
        <span className="text-8xl mx-3">
          {seconds > 9 ? seconds : `0${seconds}`}
        </span>
      </div>

      {isPaused ? (
        <button
          onClick={handleResume}
          className="text-slate-300 w-[150px] mx-3"
        >
          Resume
        </button>
      ) : (
        <button onClick={handlePause} className="text-slate-300 w-[150px] mx-3">
          Pause
        </button>
      )}
      <button onClick={handleReset} className="text-slate-300 w-[150px]">
        Reset
      </button>
    </div>
  );
};

export default Timer;
