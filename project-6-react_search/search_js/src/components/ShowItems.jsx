const ShowItems = ({ filterdArray, handleClick }) => {
  return (
    <div
      className="searchShowItems"
      style={{ border: "1px solid #ddd", width: "400px" }}
    >
      <div style={{ height: "50vh", overflowY: "auto", padding: "0 20px" }}>
        {filterdArray.map((film, index) => (
          <div key={index}>
            <p className="personName" onClick={() => handleClick(film.label)}>
              {film.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItems;
