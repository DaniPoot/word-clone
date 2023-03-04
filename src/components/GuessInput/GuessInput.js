import React from "react";

function GuessInput({ onAddGuess }) {
  const [word, setWord] = React.useState('')
  function onSubmit (event) {
    event.preventDefault();
    if (word.length === 5)  {
      onAddGuess(word)
      setWord('')
    }
    else return
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        value={word}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        onChange={ event => setWord(event.target.value.toUpperCase()) }
      />
    </form>
  );
}

export default GuessInput;
