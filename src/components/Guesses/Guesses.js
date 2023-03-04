import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses = [] }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED)
  const columns = range(0, 5)

  return (
    <div className="guess-results">
      {
        rows.map(row => (
            <Guess
              guess={guesses[row] ? guesses[row] : columns}
              key={row} 
            />
        ))
      }
    </div>
  );
}

export default Guesses;
