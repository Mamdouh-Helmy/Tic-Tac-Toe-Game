import Cell from './Cell';
import { useGame } from '../hooks/useGame';

const Board = () => {
  const { state, handleClick } = useGame();
  return (
    <div className='board'>
      {state.board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};
export default Board;