import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../Button/Button';
import Title from '../Title/Title';

import { registerUser } from '../../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.registerUser(name, email, password);
  };

  renderComponent = () => {
    return (
      <div className="register">
        <div className="register__container">
          <Title titleText="Register" />
          <form className="register__form" onSubmit={this.onFormSubmit}>
            <div className="register__form-field">
              <input
                className="register__form-input"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                required
              />
              <div className="register__form-label">Email</div>
            </div>
            <div className="register__form-field">
              <input
                className="register__form-input"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                required
              />
              <div className="register__form-label">Email</div>
            </div>
            <div className="register__form-field">
              <input
                className="register__form-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                required
              />
              <div className="register__form-label">Password</div>
            </div>
            <div className="register__links">
              <Button
                btnClasses="btn btn--lighter btn--hover-gradient"
                btnText="Submit"
                btnTextClasses="btn--text-gradient"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  render = () => {
    if (this.props.isSignedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      return this.renderComponent();
    }
  };
}

const mapStateToProps = state => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
