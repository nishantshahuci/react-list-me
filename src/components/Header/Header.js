import React from 'react';

//import './_header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="header-text">
          <span className="header-text__main">Welcome to ListMe</span>
          <span className="header-text__sub">
            Your first step to organization
          </span>
        </h1>
        <a href="/" className="header__button">
          <span className="header__button-text">Get started</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
