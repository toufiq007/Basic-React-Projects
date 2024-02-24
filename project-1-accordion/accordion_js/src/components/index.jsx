import { useState } from "react";
import data from "./data";
import "./style.css";
const Accordion = () => {
  const [singleSelect, setSingleSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  const handleMultipleSelection = (getCurrentId) => {
    const cpyMultipleSelect = [...multipleSelect];
    const findCurrentIdIndex = cpyMultipleSelect.indexOf(getCurrentId);
    //  if id is not found in this array then return index number -1
    if (findCurrentIdIndex === -1) {
      cpyMultipleSelect.push(getCurrentId);
    } else {
      cpyMultipleSelect.splice(findCurrentIdIndex, 1);
    }
    console.log(cpyMultipleSelect);
    setMultipleSelect(cpyMultipleSelect);
  };
  const handleSingleSelection = (getCurrentId) => {
    //  console.log(getCurrentId);
    setSingleSelect(getCurrentId === singleSelect ? null : getCurrentId);
    console.log(getCurrentId);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Accordion</h2>
      <div className="accordion_wrapper">
        <div style={{ textAlign: "center", display: "block" }}>
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            style={{
              border: "none",
              outline: "none",
              background: "#000",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            {enableMultiSelection ? "Multiple Select" : "Single select"}
          </button>
        </div>

        {data && data.length > 0 ? (
          data.map((singleItem, index) => (
            <>
              <div className="singleAccordion" key={index}>
                <div
                  className="accordion_title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(singleItem.id)
                      : () => handleSingleSelection(singleItem.id)
                  }
                >
                  <span>{singleItem.question}</span>
                  {singleSelect === singleItem.id ? "-" : "+"}
                </div>
                {/*  logic one */}
                {singleSelect === singleItem.id ||
                multipleSelect.indexOf(singleItem.id) !== -1 ? (
                  <div className="accordion_body">
                    <p>{singleItem.answer}</p>
                  </div>
                ) : (
                  ""
                )}
                {/*  logic two */}
              </div>
            </>
          ))
        ) : (
          <div>no data present</div>
        )}
      </div>
    </>
  );
};

export default Accordion;
