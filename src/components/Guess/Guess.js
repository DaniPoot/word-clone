import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {
        guess.map(({ letter, status }, index) => (
          <span
            className={`cell ${status}`}
            key={`${letter}-${index}`}
          >
            { isNaN(letter) && letter }
          </span>
        ))
      }
    </p>
  )
}

export default Guess;
