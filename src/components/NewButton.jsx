// src/components/NewButton.jsx
import { useGame } from '../hooks/useGame';

const NewButton = () => {
  const { resetBoard } = useGame();

  return (
    <button onClick={resetBoard} className='new-btn'>
      New Game
    </button>
  );
};

export default NewButton;
