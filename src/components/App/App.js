import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import List from '../List/List';
import history from '../../history';

const App = () => {
  return (
    <Router history={history}>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/list/:id" exact component={List} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
