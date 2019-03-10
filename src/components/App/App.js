import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Login from '../Login/Login';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Login />
    </Fragment>
  );
};

export default App;
