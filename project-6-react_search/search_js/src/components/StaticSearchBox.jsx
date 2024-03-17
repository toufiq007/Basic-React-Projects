import "./style.css";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ShowItems from "./ShowItems";
import { top100Films } from "../data/data";
const StaticSearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = (value) => {
    setSearchValue(value);
  };
  const reFilteredArray = top100Films.filter((film) =>
    film.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        flexDirection: "column",
      }}
    >
      <h1>Search here</h1>
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedValue={selectedValue}
      />
      <ShowItems
        filterdArray={reFilteredArray}
        searchValue={searchValue}
        setSelectedValue={setSelectedValue}
        handleClick={handleClick}
      />
    </div>
  );
};

export default StaticSearchBox;
