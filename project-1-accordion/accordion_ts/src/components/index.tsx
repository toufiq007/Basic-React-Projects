import { useState } from "react";
import { data } from "./data";
import "./style.css";

type singleObjType = {
  id: number;
  question: string;
  answer: string;
};
const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState<number | null>(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState<number[]>([]);
  const handleSingleSelection = (getCurrentId: number) => {
    setSingleSelection(getCurrentId === singleSelection ? null : getCurrentId);
  };
  const handleMultipleSelection = (getCurrentId: number) => {
    const cpyMultipleSelection = [...multipleSelection];
    // let newItem = []
    const indexOfCurrentId = cpyMultipleSelection.indexOf(getCurrentId);
    if (indexOfCurrentId === -1) {
      cpyMultipleSelection.push(getCurrentId);
    } else {
      cpyMultipleSelection.splice(indexOfCurrentId, 1);
    }

    console.log(cpyMultipleSelection);
    setMultipleSelection(cpyMultipleSelection);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Accordion</h2>
      <div className="accordion_wrapper">
        <div style={{ textAlign: "center", display: "block" }}>
          <button
            onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
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
            {enableMultipleSelection
              ? "Multiple Selection"
              : "Single Selection"}
          </button>
        </div>
        {data.accordionData.map((singleItem: singleObjType) => {
          return (
            <>
              <div className="singleAccordion">
                <div
                  className="accordion_title"
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(singleItem.id)
                      : () => handleSingleSelection(singleItem.id)
                  }
                >
                  <span>{singleItem.question}</span>
                  <span>+</span>
                </div>
                {singleSelection === singleItem.id ||
                multipleSelection.indexOf(singleItem.id) !== -1 ? (
                  <div className="accordion_body">
                    <p>{singleItem.answer}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
