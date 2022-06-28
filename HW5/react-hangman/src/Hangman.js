import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

const Hangman = ({ puzzle, maxError }) => {
  const [guessedLetters, setguessedLetters] = useState([]);
  const [errorCnt, setErrorCnt] = useState(0);

  const guessedLetterHandler = (letter) => {
    let val = letter.toLowerCase();
    setguessedLetters((prev) => [...prev, val]);
    if (puzzle.toLowerCase().indexOf(val) === -1) {
      setErrorCnt(errorCnt + 1);
    } else {
    }
  };

  return (
    <>
      <LetterGrid puzzle={puzzle} guessedLetters={guessedLetters} />
      <div id="left">LEFT : {maxError - errorCnt}</div>

      <ButtonGrid
        guessedLetterHandler={guessedLetterHandler}
        isClickable={errorCnt !== maxError}
      />
    </>
  );
};

export default Hangman;
