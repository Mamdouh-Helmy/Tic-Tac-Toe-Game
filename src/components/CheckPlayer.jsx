import { useGame } from '../hooks/useGame';
import { useEffect, useState } from 'react';
import Win from './Win';
import ResetButton from './ResetButton';
import NewButton from './NewButton';

const CheckPlayer = () => {
  const { state, dispatch } = useGame();
  const [showWinMessage, setShowWinMessage] = useState(!!state.winner);
  const [showButtons, setShowButtons] = useState(true);

  const handleClick = () => {
    if (dispatch) {
      dispatch({
        type: "TOGGLE_PLAYER",
      });
    }
  };

  useEffect(() => {
    if (state.winner) {
      setShowWinMessage(true);
      const timer = setTimeout(() => {
        setShowWinMessage(false);
        setShowButtons(true); 
      }, 2000);

      return () => clearTimeout(timer); 
    } else if (state.gameStarted) {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  }, [state.winner, state.gameStarted]);

  return (
    <>
      {showWinMessage ? (
        <Win winner={state.winner} />
      ) : (
        <>
          <div
            className={`check-player player-${state.currentPlayer}`}
            onClick={handleClick}
          >
            <div className={`player player-${state.currentPlayer}`}>
              {state.currentPlayer} turn
            </div>
          </div>
          {showButtons && <NewButton />}
          {showButtons && <ResetButton />}
        </>
      )}
    </>
  );
};

export default CheckPlayer;
