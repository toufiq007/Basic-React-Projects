/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const DynamicInput = () => {
  const initialArray = [{ name: "" }];
  const [value, setValue] = useState(initialArray);
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    const newArray = [...value, { name: "" }];
    setValue(newArray);
  };
  const handleRemove = (Newindex: any) => {
    const newArray = [...value];
    newArray.splice(Newindex, 1);
    setValue(newArray);
  };
  console.log(value);
  return (
    <div>
      <h2>Dynamic input</h2>
      <div>
        {value.length > 0 &&
          value.map((singleValue, index) => {
            return (
              <>
                <input
                  key={index}
                  style={{ fontSize: "14px", padding: "7px 14px" }}
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                {value.length > 1 && (
                  <button onClick={() => handleRemove(index)}>remove</button>
                )}
                <br />
              </>
            );
          })}
        <button onClick={handleClick}>Add field</button>
      </div>
    </div>
  );
};

export default DynamicInput;
