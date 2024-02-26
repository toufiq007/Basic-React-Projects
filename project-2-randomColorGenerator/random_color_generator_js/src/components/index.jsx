import { useEffect, useState } from "react";
import "./style.css";
const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("pink");

  const handleHexColor = () => {
    const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    let newColor = "";
    for (let i = 0; i < 6; i++) {
      newColor += hexColor[Math.floor(Math.random() * hexColor.length)];
    }
    console.log(color);
    setColor(`#${newColor}`);
  };
  const handleRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "hex") handleHexColor();
    else handleRGBColor();
  }, [typeOfColor]);
  return (
    <div className="container" style={{ background: color }}>
      <div className="buttonContainer">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
        >
          Generate Random Color
        </button>
      </div>
      <div className="textContainer">
        <h3>{typeOfColor === "hex" ? "HEX" : "RGB"} Color</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
