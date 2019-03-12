import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import List from '../List/List';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Dashboard
        lists={[
          {
            id: 1,
            title: 'Groceries',
            items: [
              { id: 1, title: 'Milk', complete: false },
              { id: 2, title: 'Eggs', complete: false },
              { id: 3, title: 'Cheese', complete: true }
            ]
          },
          {
            id: 2,
            title: 'Chores',
            items: [
              { id: 1, title: 'Clean bathroom', complete: false },
              { id: 2, title: 'Wash dishes', complete: false },
              { id: 3, title: 'Do laundry', complete: true }
            ]
          }
        ]}
      /> */}
      <List
        list={{
          id: 2,
          title: 'Chores',
          items: [
            { id: 1, title: 'Clean bathroom', complete: false },
            { id: 2, title: 'Wash dishes', complete: false },
            { id: 3, title: 'Do laundry', complete: true }
          ]
        }}
      />
    </div>
  );
};

export default App;
