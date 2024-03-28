// const InputTimer = ({ handleChange, handleStart }) => {
//   return (
//     <div className="">
//       <div className="inputContainer mb-9">
//         <input
//           onChange={(e) => handleChange(e)}
//           id="hours"
//           type="text"
//           placeholder="HH"
//           className=" text-7xl text-center mx-3 border-4 w-[200px]"
//         />
//         <input
//           onChange={(e) => handleChange(e)}
//           id="minutes"
//           type="text"
//           placeholder="MM"
//           className=" text-7xl text-center mx-3 border-4 w-[200px]"
//         />
//         <input
//           onChange={(e) => handleChange(e)}
//           id="seconds"
//           type="text"
//           placeholder="SS"
//           className=" text-7xl text-center mx-3 border-4 w-[200px]"
//         />
//       </div>
//       <button onClick={handleStart} className="text-slate-300 w-[150px]">
//         Start
//       </button>
//     </div>
//   );
// };

// export default InputTimer;

type InputTimerProps = {
  handleStart: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTimer = ({ handleStart, handleChange }: InputTimerProps) => {
  return (
    <div className="">
      <div className="inputContainer mb-9">
        <input
          onChange={(e) => handleChange(e)}
          id="hours"
          type="text"
          placeholder="HH"
          className=" text-7xl text-center mx-3 border-4 w-[200px]"
        />
        <input
          onChange={(e) => handleChange(e)}
          id="minutes"
          type="text"
          placeholder="MM"
          className=" text-7xl text-center mx-3 border-4 w-[200px]"
        />
        <input
          onChange={(e) => handleChange(e)}
          id="seconds"
          type="text"
          placeholder="SS"
          className=" text-7xl text-center mx-3 border-4 w-[200px]"
        />
      </div>
      <button onClick={handleStart} className="text-slate-300 w-[150px]">
        Start
      </button>
    </div>
  );
};

export default InputTimer;
