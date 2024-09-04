// src/contexts/GameContext.js
import { createContext, useReducer } from 'react';
import { loadScoresFromLocalStorage } from '../utils/localStorage';

const GameContext = createContext();

const initialState = {
  scores: loadScoresFromLocalStorage(), 
  board: Array(9).fill(null),
  currentPlayer: 'X',
  gameStarted: false,
  winner: null, 
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return {
        ...state,
        scores: {
          ...state.scores,
          [action.payload]: (state.scores[action.payload] || 0) + 1,
        },
      };
      case 'RESET_GAME':
        return {
          ...initialState,
        };
    case 'RESET_BOARD':
      return {
        ...state,
        board: Array(9).fill(null),
        currentPlayer: 'X',
        gameStarted: false,
        winner: null, 
      };
    case 'UPDATE_BOARD':
      return {
        ...state,
        board: action.payload.board,
        currentPlayer: action.payload.currentPlayer,
        gameStarted: true,
      };
    case 'TOGGLE_PLAYER':
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    case 'SET_WINNER': 
      return {
        ...state,
        winner: action.payload,
      };
    default:
      return state;
  }
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
