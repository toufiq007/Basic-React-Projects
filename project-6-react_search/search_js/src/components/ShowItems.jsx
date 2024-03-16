const ShowItems = ({ filterdArray, searchValue,handleClick }) => {
  return (
    <div
      className="searchShowItems"
      style={{ border: "1px solid #ddd", width: "400px" }}
    >
      <div style={{ height: "50vh", overflowY: "auto", padding: "0 20px" }}>
        {filterdArray.length > 1 &&
          filterdArray
            .filter((film) =>
              film.label.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((film, index) => (
              <div key={index}>
                <p className="personName" onClick={()=> handleClick(film.label)}>{film.label}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ShowItems;
