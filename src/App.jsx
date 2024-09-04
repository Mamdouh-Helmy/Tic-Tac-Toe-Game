// src/App.jsx
import './App.css';
import { GameProvider } from './contexts/GameContext';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import CheckPlayer from './components/CheckPlayer';
import Logo from "./images/tic. tac.toe..png";

const App = () => {
  return (
    <GameProvider>
      <div className='image'>
        <img src={Logo} alt="Tic Tac Toe" />
      </div>
      <div className='container'>
        <GameStatus />
        <Board />
        <CheckPlayer />
      </div>
    </GameProvider>
  );
};

export default App;
