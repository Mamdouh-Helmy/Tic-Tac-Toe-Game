// src/components/Win.jsx
const Win = ({ winner }) => {
    return (
      <div className="win-message">
        {winner === 'draw' ? "It's a Draw!" : `${winner} Wins!`}
      </div>
    );
  };
  
  export default Win;
  