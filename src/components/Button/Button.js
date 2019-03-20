import React from 'react';

const Button = ({ btnClasses, btnText, btnTextClasses, onClick }) => {
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={btnTextClasses}>{btnText}</span>
    </button>
  );
};

export default Button;
