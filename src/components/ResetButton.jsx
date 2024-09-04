import { useGame } from '../hooks/useGame';

const ResetButton = () => {
  const { resetGame } = useGame();

  return (
    <button 
      onClick={resetGame} 
      className='resetButton'
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
