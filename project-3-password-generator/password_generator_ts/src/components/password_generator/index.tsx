import { useState } from "react";
import "./style.css";
//  character array
const passCharacterArray = [
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  7,
  8,
  9,
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const PasswordGenerator = () => {
   const [password, setPassword] = useState("");
   // passord generator funtion
  const generatePassword = (
    charArray: (number | string)[],
    numOfPasswordLength: number
  ) => {
    let generatePassword = "";
    for (let i = 0; i < numOfPasswordLength; i++) {
      generatePassword +=
        charArray[Math.floor(Math.random() * charArray.length)];
    }
    return generatePassword;
  };
  //  password handler
  const handlePasswordGenerator = () => {
    const generateNewPassword = generatePassword(passCharacterArray, 10);
    setPassword(generateNewPassword);
  };
  return (
    <div className="container">
      <h2>Random Password Generator</h2>
      <button onClick={handlePasswordGenerator}>Generate Password</button>

      <div
        className="password_container"
      >
        <span>{password}</span>
      </div>
    </div>
  );
};

export default PasswordGenerator;
