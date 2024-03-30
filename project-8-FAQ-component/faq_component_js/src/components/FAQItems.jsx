/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FAQItems = ({ item, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleShowContent = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="faqBox py-3 my-3 min-w-[700px]">
      <h3
        onClick={() => handleShowContent(item.id)}
        className="text-3xl py-3 bg-orange-200 cursor-pointer flex justify-between px-4 align-middle"
      >
        {item.question}
        {/* {currentId === item.id ? <FaMinusCircle /> : <FaPlusCircle />} */}
        {isShow ? <FaMinusCircle /> : <FaPlusCircle />}
      </h3>

      {/* {currentId === item.id && (
        <p
          className="bg-red-100 py-8 text-1xl px-3"
          style={{ fontSize: "20px" }}
        >
          {item.answer}
        </p>
      )} */}
      {isShow && (
        <p
          className="bg-red-100 py-8 text-1xl px-3"
          style={{ fontSize: "20px" }}
        >
          {item.answer}
        </p>
      )}
    </div>
  );
};

export default FAQItems;
