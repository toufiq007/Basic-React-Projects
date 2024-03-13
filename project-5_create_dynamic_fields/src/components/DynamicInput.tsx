/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const DynamicInput = () => {
  const initialArray = [{ name: "" }];
  const [value, setValue] = useState(initialArray);
  const handleClick = () => {
    const newArray = [...value, { name: "" }];
    setValue(newArray);
  };
  const handleRemove = (index: number) => {
    const newArray = [...value];
    newArray.splice(index, 1);
    setValue(newArray);
  };
  const handleChange = (e: React.ChangeEvent, index: number) => {
    const values = [...value];
    values[index][e.target.name] = e.target.value;
    setValue(values);
  };
  return (
    <div>
      <h2>Dynamic input</h2>
      <div>
        {value.length > 0 &&
          value.map((singleValue, index) => {
            return (
              <>
                <input
                  name="name"
                  key={index}
                  style={{ fontSize: "14px", padding: "7px 14px" }}
                  type="text"
                  value={singleValue.name}
                  onChange={(e) => handleChange(e, index)}
                />
                {value.length > 1 && (
                  <button
                    style={{
                      background: "pink",
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginBottom: "5px",
                    }}
                    onClick={() => handleRemove(index)}
                  >
                    remove
                  </button>
                )}
                <br />
              </>
            );
          })}
        <button
          style={{ background: "lightGreen", marginTop: "20px" }}
          onClick={handleClick}
        >
          Add field
        </button>
      </div>
    </div>
  );
};

export default DynamicInput;
