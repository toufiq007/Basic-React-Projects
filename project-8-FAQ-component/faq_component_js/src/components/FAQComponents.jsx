/* eslint-disable react/jsx-key */
// import { useState } from "react";
import { data as dataArray } from "./data";
import FAQItems from "./FAQItems";
const FAQComponents = () => {
  // const [showContent, setShowContent] = useState(false);
  // const [currentId, setCurrrentId] = useState(1);
  // // insert id to every array
  // const contentData = dataArray.map((item, index) => {
  //   return {
  //     id: index + 1,
  //     question: item.question,
  //     answer: item.answer,
  //   };
  // });
  // const handleShowContent = (id) => {
  //   setCurrrentId(currentId === id ? null : id);
  //   setShowContent(!showContent);
  // };

  return (
    <div>
      <h1 className="text-5xl uppercase font-mono">hello faq component</h1>
      <div className="faqContainer mt-10">
        {dataArray.length > 0 &&
          dataArray.map((item, index) => {
            return (
              <FAQItems
                item={item}
                index={index}
                // handleShowContent={handleShowContent}
                // currentId={currentId}
                key={index}
                // setCurrrentId={setCurrrentId}
              />
              // <div className="faqBox py-3 my-3 min-w-[700px]" key={index}>
              //   <h3
              //     onClick={() => handleShowContent(item.id)}
              //     className="text-3xl py-3 bg-orange-200 cursor-pointer flex justify-between px-4 align-middle"
              //   >
              //     {item.question}
              //     {currentId === item.id ? <FaMinusCircle /> : <FaPlusCircle />}
              //   </h3>

              //   {currentId === item.id && (
              //     <p
              //       className="bg-red-100 py-8 text-1xl px-3"
              //       style={{ fontSize: "20px" }}
              //     >
              //       {item.answer}
              //     </p>
              //   )}
              // </div>
            );
          })}
      </div>
    </div>
  );
};

export default FAQComponents;
