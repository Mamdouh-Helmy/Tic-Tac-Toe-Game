import React from 'react';
import { useGame } from '../hooks/useGame';

const GameStatus = () => {
  const { state } = useGame();

  return (
    <div className='boxs'>
      <div className='box'>
        <div>PLAYER X</div>
        <div className='state'>{state.scores.playerX}</div>
      </div>
      <div className='box'>
        <div>DRAW</div>
        <div className='state'>{state.scores.draw}</div>
      </div>
      <div className='box'>
        <div>PLAYER O</div>
        <div className='state'>{state.scores.playerO}</div>
      </div>
    </div>
  );
};

export default GameStatus;