// const CountDownTimer = ({
//   handleReset,
//   hours,
//   minutes,
//   seconds,
//   isPaused,
//   handlePause,
//   handleResume,
// }) => {
//   return (
//     <div className="">
//       <div className="inputContainer mb-9">
//         <span className="text-8xl mx-3">
//           {hours > 9 ? hours : `0${hours}`}:
//         </span>
//         <span className="text-8xl mx-3">
//           {minutes > 9 ? minutes : `0${minutes}`}:
//         </span>
//         <span className="text-8xl mx-3">
//           {seconds > 9 ? seconds : `0${seconds}`}
//         </span>
//       </div>

//       {isPaused ? (
//         <button
//           onClick={handleResume}
//           className="text-slate-300 w-[150px] mx-3"
//         >
//           Resume
//         </button>
//       ) : (
//         <button onClick={handlePause} className="text-slate-300 w-[150px] mx-3">
//           Pause
//         </button>
//       )}
//       <button onClick={handleReset} className="text-slate-300 w-[150px]">
//         Reset
//       </button>
//     </div>
//   );
// };

// export default CountDownTimer;

type CountDownTimerProps = {
  handleReset: () => void;
  hours: number;
  minutes: number;
  seconds: number;
  isPaused: boolean;
  handlePause: () => void;
  handleResume: () => void;
};

const CountDownTimer = ({
  handleReset,
  hours,
  minutes,
  seconds,
  isPaused,
  handlePause,
  handleResume,
}: CountDownTimerProps) => {
  return (
    <div className="">
      <div className="inputContainer mb-9">
        <span className="text-8xl mx-3">{hours}:</span>
        <span className="text-8xl mx-3">{minutes}:</span>
        <span className="text-8xl mx-3">{seconds}</span>
      </div>

      {isPaused ? (
        <button
          onClick={handleResume}
          className="text-slate-300 w-[150px] mx-3"
        >
          Resume
        </button>
      ) : (
        <button
          onClick={handlePause}
          className="text-slate-300 w-[150px] mx-3"
        >
          Pause
        </button>
      )}

      <button onClick={handleReset} className="text-slate-300 w-[150px]">
        Reset
      </button>
    </div>
  );
};

export default CountDownTimer;
