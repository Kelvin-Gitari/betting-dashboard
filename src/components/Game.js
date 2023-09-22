// src/components/Game.js

import React from 'react';

function Game({ game, onBet }) {
  const { teamA, teamB, oddsA, oddsB, oddsDraw } = game;

  return (
    <div className="game">
      <h2>{teamA} vs. {teamB}</h2>
      <p>Odds for {teamA}: {oddsA}</p>
      <p>Odds for {teamB}: {oddsB}</p>
      <p>Odds for Draw: {oddsDraw}</p>
      <button onClick={() => onBet(game, 'teamA')}>Bet on {teamA}</button>
      <button onClick={() => onBet(game, 'teamB')}>Bet on {teamB}</button>
      <button onClick={() => onBet(game, 'draw')}>Bet on Draw</button>
    </div>
  );
}

export default Game;
