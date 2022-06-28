import React, { useState } from 'react';

const Button = ({ value, click }) => {
  const [isClicked, setIsClicked] = useState(false);

  let className = 'button';

  if (isClicked) {
    className += ' guessed';
  }

  const clickHandler = () => {
    setIsClicked(true);
    click(value);
  };
  return (
    <button className={className} onClick={clickHandler}>
      {value}
    </button>
  );
};

export default Button;
