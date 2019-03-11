import React, { Component, Fragment } from 'react';

import Button from '../Button/Button';
import Title from '../Title/Title';
import ItemField from '../ItemField/ItemField';

class Dashboard extends Component {
  renderInitial = () => {
    return (
      <Fragment>
        <h2 className="dashboard__initial-main">You don't have any lists!</h2>
        <h3 className="dashboard__initial-sub">
          Get started by clicking the button below
        </h3>
        <div className="dashboard__initial-button">
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Create"
            btnTextClasses="btn--text-gradient"
          />
        </div>
      </Fragment>
    );
  };

  renderHeader = () => {
    return (
      <div className="dashboard__header">
        <h2 className="dashboard__header-title">Lists</h2>
        <div className="dashboard__header-button">
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Create"
            btnTextClasses="btn--text-gradient"
          />
        </div>
      </div>
    );
  };

  onListDelete = id => {
    console.log('delete list with id ' + id);
  };

  onListEdit = (id, title) => {
    console.log('update list with id ' + id + ' and title ' + title);
  };

  onListClick = id => {
    console.log('redirect to list with id ' + id);
  };

  renderLists = () => {
    return (
      <div className="dashboard__list">
        {this.props.lists.map(list => (
          <div key={list.id} className="dashboard__list-item">
            <div className="dashboard__list-field">
              <ItemField
                id={list.id}
                title={list.title}
                onItemDelete={this.onListDelete}
                onItemEdit={this.onListEdit}
                onItemClick={this.onListClick}
              />
            </div>
            <div className="dashboard__list-icon">
              <i className="fas fa-chevron-right fa-2x" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  renderDashboard = () => {
    return (
      <Fragment>
        {this.renderHeader()}
        {this.renderLists()}
      </Fragment>
    );
  };

  renderContent = () => {
    return this.props.lists.length > 0
      ? this.renderDashboard()
      : this.renderInitial();
  };

  render = () => {
    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <Title titleText="Dashboard" />
          {this.renderContent()}
        </div>
      </div>
    );
  };
}

export default Dashboard;
