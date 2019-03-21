import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from '../../actions';
import Button from '../Button/Button';
import Title from '../Title/Title';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signIn(email, password);
  };

  renderComponent = () => {
    return (
      <div className="login">
        <div className="login__container">
          <Title titleText="Login" />
          <form className="login__form" onSubmit={this.onFormSubmit}>
            <div className="login__form-field">
              <input
                className="login__form-input"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                required
              />
              <div className="login__form-label">Email</div>
            </div>
            <div className="login__form-field">
              <input
                className="login__form-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                required
              />
              <div className="login__form-label">Password</div>
            </div>
            <div className="login__links">
              <Button btnClasses="btn btn--link" btnText="Need an account?" />
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

export default connect(
  mapStateToProps,
  { signIn }
)(Login);
