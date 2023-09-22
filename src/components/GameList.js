// src/components/GameList.js
import React from 'react';
import './GameList.css';

function GameList({ games, onBet }) {
  return (
    <div className="game-list">
      <h2>Games List</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <div className="game">
              <div className="teams">
                <span>{game.teamA} vs {game.teamB}</span>
              </div>
              <div className="odds">
                <span>Team A: {game.oddsA}</span>
                <span>Team B: {game.oddsB}</span>
                <span>Draw: {game.oddsDraw}</span>
              </div>
              <button onClick={() => onBet(game, 'A')}>Bet on Team A</button>
              <button onClick={() => onBet(game, 'B')}>Bet on Team B</button>
              <button onClick={() => onBet(game, 'Draw')}>Bet on Draw</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
