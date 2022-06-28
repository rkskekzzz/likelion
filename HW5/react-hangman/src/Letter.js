import React from 'react';

const Letter = ({ letter, isClicked }) => {
  let output = ' ';

  if (isClicked) {
    output = letter;
  }
  return <span>{output}</span>;
};

export default Letter;
