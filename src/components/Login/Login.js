import React from 'react';

import Button from '../Button/Button';
import Title from '../Title/Title';

const Login = () => {
  return (
    <div className="login">
      <Title titleText="Login" />
      <form className="login__form">
        <div className="login__form-field">
          <input
            className="login__form-input"
            type="email"
            placeholder="Email"
            required
          />
          <div className="login__form-label">Email</div>
        </div>
        <div className="login__form-field">
          <input
            className="login__form-input"
            type="password"
            placeholder="Password"
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
  );
};

export default Login;
