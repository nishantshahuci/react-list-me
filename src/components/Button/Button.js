import React from 'react';

const Button = ({ btnClasses, btnText, btnTextClasses }) => {
  return (
    <div className={btnClasses}>
      <span className={btnTextClasses}>{btnText}</span>
    </div>
  );
};

export default Button;
