import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../actions/index';

class Navbar extends Component {
  renderLinks = () => {
    if (this.props.isSignedIn === true) {
      return (
        <Fragment>
          <Link to="/dashboard" className="navbar__button">
            Dashboard
          </Link>
          <div className="navbar__welcome navbar__right">Welcome, Nishant</div>
          <div className="navbar__button" onClick={this.props.signOut}>
            Logout
          </div>
        </Fragment>
      );
    } else {
      return (
        <Link to="/login" className="navbar__button navbar__right">
          Login
        </Link>
      );
    }
  };

  render = () => {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img
            className="navbar__logo-img"
            src={require('../../img/logo.png')}
            alt="Logo"
          />
        </Link>
        <Link to="/" className="navbar__logo-brand">
          ListMe
        </Link>
        {this.renderLinks()}
      </nav>
    );
  };
}

const mapStateToProps = state => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signOut }
)(Navbar);
