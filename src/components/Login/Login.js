import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__header">Login</h1>
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
          <a className="login__links--register" href="">
            Need an account?
          </a>
          <button className="login__links--submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
