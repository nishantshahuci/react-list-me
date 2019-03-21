import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../Button/Button';

class Header extends Component {
  renderComponent = () => {
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

  render = () => {
    if (this.props.isSignedIn === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return this.renderComponent();
    }
  };
}

const mapStateToProps = state => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(mapStateToProps)(Header);
