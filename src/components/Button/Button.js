import React from 'react';

const Button = ({ btnClasses, btnText, btnTextClasses }) => {
  return (
    <a className={btnClasses}>
      <span className={btnTextClasses}>{btnText}</span>
    </a>
  );
};

export default Button;
