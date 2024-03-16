import { TextField } from "@mui/material";

const SearchBox = ({ searchValue,setSearchValue }) => {
  return (
    <div>
      <div className="searchBox">
        <TextField
          size="medium"
          label="Seach here"
          sx={{ width: "400px" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
