const Cell = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`box ${value == "X" ? "palyerX" : "palyerY"}`}
    >
      {value}
    </div>
  );
};

export default Cell;