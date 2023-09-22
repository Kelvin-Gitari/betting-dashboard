// src/components/BetSlip.js
import React, { useState, useEffect } from 'react';
import './BetSlip.css';

function BetSlip({ selectedBets, onRemoveBet }) {
  const [totalOdds, setTotalOdds] = useState(1);

  useEffect(() => {
    // Calculate total odds whenever selectedBets change
    if (selectedBets.length === 0) {
      // Reset total odds to 1 if there are no bets
      setTotalOdds(0);
    } else {
      // Calculate total odds by multiplying the odds of selected bets
      const newTotalOdds = selectedBets.reduce((accumulator, bet) => accumulator * bet.odds, 1);
      setTotalOdds(newTotalOdds.toFixed(2)); // Limit to two decimal places
    }
  }, [selectedBets]);

  const handleRemoveBet = (index) => {
    // Calling the onRemoveBet callback with the index of the bet to remove
    if (typeof onRemoveBet === 'function') {
      onRemoveBet(index);
    }
  };

  return (
    <div className="bet-slip">
      <h2>Bet Slip</h2>
      <ul>
        {selectedBets.map((bet, index) => (
          <li key={index}>
            <div className="bet">
              <span>Bet on {bet.team === 'draw' ? 'Draw' : bet.team}</span>
              <span>Odds: {bet.odds}</span>
              <button onClick={() => handleRemoveBet(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-odds">
        Total Odds: {totalOdds}
      </div>
    </div>
  );
}

export default BetSlip;
