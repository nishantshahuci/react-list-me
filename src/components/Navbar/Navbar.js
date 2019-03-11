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
      <div className="navbar__button">Login</div>
    </nav>
  );
};

export default Navbar;
