import { TextField } from "@mui/material";
import "./style.css";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ShowItems from "./ShowItems";

const personList = [
  {
    id: 1,
    name: "Toufiq Limon",
  },
  {
    id: 2,
    name: "Rajib Ahmed",
  },
  {
    id: 3,
    name: "Fazle Rabby Ismam",
  },
  {
    id: 4,
    name: "Tarek Mahbub Toru",
  },
  {
    id: 5,
    name: "Imran Hassan",
  },
  {
    id: 6,
    name: "Nahid Hasan",
  },
  {
    id: 7,
    name: "Taskirul Taysir",
  },
  {
    id: 8,
    name: "Asifur Rahman",
  },
  {
    id: 9,
    name: "Mehedi Hasan",
  },
  {
    id: 10,
    name: "Sagor Mabbub",
  },
];

const StaticSearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
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
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShowItems filterdArray={personList} searchValue={searchValue} />
    </div>
  );
};

export default StaticSearchBox;
