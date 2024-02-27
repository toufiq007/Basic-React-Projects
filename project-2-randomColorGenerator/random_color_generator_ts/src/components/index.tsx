import { useEffect, useState } from "react";
import "./style.css";
const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfcolor] = useState<string>("hex");
  const [color, setColor] = useState<string>("pink");

  const handleHexColor = (): void => {
    const hexColorArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let newColor = "";
    for (let i = 0; i < 6; i++) {
      newColor +=
        hexColorArray[Math.floor(Math.random() * hexColorArray.length)];
    }
    console.log(`#${newColor}`);
    setColor(`#${newColor}`);
  };
  const handleRGBColor = (): void => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColor(`rgb(${r},${g},${b})`);
    console.log(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") handleHexColor();
    else handleRGBColor();
  }, [typeOfColor]);

  return (
    <div className="container" style={{ background: color }}>
      <div className="buttonContainer">
        <button onClick={() => setTypeOfcolor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfcolor("rgb")}>Create RGB Color</button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
        >
          Generate Random Color
        </button>
      </div>
      <div className="textContainer">
        <h3> {typeOfColor === "hex" ? "hex" : "rgb"}Color</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
