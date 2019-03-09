import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logo-img"
          src={require('../../img/logo.png')}
          alt="Logo"
        />
      </div>
      <div className="navbar__logo-brand">ListMe</div>
      <a className="navbar__button">Login</a>
    </nav>
  );
};

export default Navbar;
