// src/utils/localStorage.js
export const saveScoresToLocalStorage = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

export const loadScoresFromLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem('scores'));
  return scores || { playerX: 0, playerO: 0, draw: 0 };
};
