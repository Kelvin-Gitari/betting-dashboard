// src/components/BetSlip.js
import React from 'react';
import './BetSlip.css';

function BetSlip({ selectedBets, onRemoveBet }) {
  const handleRemoveBet = (index) => {
    // Callingg the onRemoveBet callback with the index of the bet to remove
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
              <span>Bet on {bet.team}</span>
              <span>Odds: {bet.odds}</span>
              <button onClick={() => handleRemoveBet(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BetSlip;
