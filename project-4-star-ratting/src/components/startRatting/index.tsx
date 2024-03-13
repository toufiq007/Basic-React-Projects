import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRatting = ({ numOfStar = 10 }) => {
  console.log([...Array(numOfStar)]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
return (
    <div>
      <h2>star ratting</h2>
      {[...Array(numOfStar)].map((item, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={40}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );``
      })}
    </div>
  );
};

export default StarRatting;
