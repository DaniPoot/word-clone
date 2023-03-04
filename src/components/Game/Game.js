import React from 'react';

import GuessInput from '../GuessInput/';
import Guesses from '../Guesses/';
import HappyBanner from '../HappyBanner/';
import SadBanner from '../SadBanner/';
import RestartButton from '../RestartButton'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [endGame, setEndGame] = React.useState('playing')
  const [answer, setAnswer] = React.useState(sample(WORDS))

  function addGuess (guess) {
    const nextGuesses = [...guesses]
    const nextGuess = checkGuess(guess, answer)
    const isIncorrect = nextGuess.some(({ status }) => ['incorrect', 'misplaced'].includes(status) )

    if (!isIncorrect) setEndGame('win')
    if (isIncorrect && (NUM_OF_GUESSES_ALLOWED - 1 === nextGuesses.length)) setEndGame('losse')
    nextGuesses.push(nextGuess)
    setGuesses(nextGuesses)
  }

  function restartGame () {
    setGuesses([])
    setEndGame('playing')
    const answer = sample(WORDS);
    setAnswer(answer)
  }

  return <div>
    <Guesses guesses={guesses} />
    { endGame === 'playing' && <GuessInput onAddGuess={addGuess} /> }
    { endGame === 'win' && <HappyBanner guesses={addGuess.length} /> }
    { endGame === 'losse' && <SadBanner correctWord={answer} /> }
    { ['losse', 'win'].includes(endGame) && <RestartButton onClick={restartGame} /> }
  </div>;
}

export default Game;
