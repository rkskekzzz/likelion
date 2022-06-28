import React from 'react';
import Letter from './Letter';

const LetterGrid = ({ puzzle, guessedLetters }) => {
  let letters = puzzle.split('').map((letter, index) => {
    let isClicked = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return <Letter key={index} letter={letter} isClicked={isClicked} />;
  });

  return <div className="letters">{letters}</div>;
};

export default LetterGrid;
