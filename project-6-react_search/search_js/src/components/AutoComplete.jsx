import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { top100Films } from "../data/data";

const personName = [
  {
    id: 1,
    name: "limon",
  },
  {
    id: 2,
    name: "Salman",
  },
  {
    id: 3,
    name: "toufiq",
  },
  {
    id: 4,
    name: "hasina",
  },
];

const AutoComplete = () => {
  return (
    <div>
      <Autocomplete
        size="small"
        disablePortal
        id="combo-box-demo"
        options={personName.map((user) => user.name)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField label="search here" {...params} name="Movie" />
        )}
      />
    </div>
  );
};

export default AutoComplete;
