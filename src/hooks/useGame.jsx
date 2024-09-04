import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import { checkWinner } from '../utils/checkWinner';
import { saveScoresToLocalStorage } from '../utils/localStorage';

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  
  const { state, dispatch } = context;

  const handleClick = (index) => {
    if (state.board[index] || state.winner) return;

    const newBoard = [...state.board];
    newBoard[index] = state.currentPlayer;

    const winner = checkWinner(newBoard);
    if (winner) {
      dispatch({ type: 'UPDATE_SCORE', payload: winner === 'draw' ? 'draw' : winner });
      dispatch({ type: 'SET_WINNER', payload: winner });
    }

    dispatch({
      type: 'UPDATE_BOARD',
      payload: {
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      },
    });
  };

  useEffect(() => {
    saveScoresToLocalStorage(state.scores);
  }, [state.scores]);

  return {
    state,
    handleClick,
    resetBoard: () => dispatch({ type: 'RESET_BOARD' }),
    resetGame: () => {
      dispatch({ type: 'RESET_GAME' });
      localStorage.clear(); 
    },
  };
};
