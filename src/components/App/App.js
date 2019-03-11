import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Dashboard
        lists={[
          {
            id: 1,
            title: 'Groceries',
            items: [
              { id: 1, title: 'Milk', complete: false },
              { id: 2, title: 'Eggs', complete: false },
              { id: 3, title: 'Cheese', complete: true }
            ]
          }
        ]}
      />
    </Fragment>
  );
};

export default App;
