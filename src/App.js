// src/App.js

import React, { useState } from 'react';
import './App.css';
import gamesData from './gamesData';
import GameList from './components/GameList';
import BetSlip from './components/BetSlip';

function App() {
  const [selectedBets, setSelectedBets] = useState([]);

  const handleBet = (game, team) => {
    // Check if the bet already exists in selectedBets
    const existingBet = selectedBets.find((bet) => bet.game.id === game.id);

    if (existingBet) {
      // Remove the existing bet
      setSelectedBets(selectedBets.filter((bet) => bet.game.id !== game.id));
    } else {
      let odds;
      if (team === 'draw') {
        odds = game.oddsDraw;
      } else if (team === 'teamA') {
        odds = game.oddsA;
      } else {
        odds = game.oddsB;
      }
      // Add the new bet
      setSelectedBets([...selectedBets, { game, team, odds }]);
    }
  };

  // Function to handle removing a bet from the bet slip
  const handleRemoveBet = (indexToRemove) => {
    setSelectedBets((prevBets) => prevBets.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>Betting App</h1>
      <div className="main-content">
        <GameList games={gamesData} onBet={handleBet} />
        <BetSlip selectedBets={selectedBets} onRemoveBet={handleRemoveBet} />
      </div>
    </div>
  );
}

export default App;
