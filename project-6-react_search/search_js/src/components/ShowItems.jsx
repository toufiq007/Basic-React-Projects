const ShowItems = ({ filterdArray, searchValue }) => {
  return (
    <div className="searchShowItems" style={{ border: "1px solid #ededed" }}>
      <div>
        {filterdArray.length > 1 &&
          filterdArray
            .filter((user) =>
              user.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((person, index) => (
              <div key={index}>
                <p className="personName">{person.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ShowItems;
