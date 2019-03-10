import React from 'react';

import Button from '../Button/Button';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-text">
        <span className="header-text__main">Welcome to ListMe</span>
        <span className="header-text__sub">
          Your first step to organization
        </span>
      </h1>
      <div className="header__button">
        <Button
          btnClasses="btn btn--lighter btn--hover-white"
          btnText="Get started"
          btnTextClasses="btn--text-gradient"
        />
      </div>
    </div>
  );
};

export default Header;
