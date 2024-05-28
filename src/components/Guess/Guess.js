import React from "react";
import { range } from "../../utils";

function Guess({ possibleGuess }) {
  function createRow() {
    const row = [];

    range(5).map((num) => {
      if (possibleGuess) {
        const letter = possibleGuess[num].letter;
        const status = possibleGuess[num].status;
        row.push(
          <span key={num} className={`cell ${status}`}>
            {letter}
          </span>
        );
      } else {
        row.push(<span key={num} className="cell"></span>);
      }
    });

    return row;
  }
  return (
    <div className="guess-results">
      {<p className="guess">{createRow()}</p>}
    </div>
  );
}

export default Guess;
