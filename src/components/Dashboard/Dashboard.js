import React, { Component, Fragment } from 'react';

import Button from '../Button/Button';
import Title from '../Title/Title';

class Dashboard extends Component {
  renderInitial = () => {
    return (
      <Fragment>
        <h2 className="dashboard__header--main">You don't have any lists!</h2>
        <h3 className="dashboard__header--sub">
          Get started by clicking the button below
        </h3>
        <div className="dashboard__button">
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Create"
            btnTextClasses="btn--text-gradient"
          />
        </div>
      </Fragment>
    );
  };

  renderLists = () => {
    return (
      <div className="dashboard__view">
        <h2 className="dashboard__view-title">Lists</h2>
        <div className="dashboard__view-button">
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Create"
            btnTextClasses="btn--text-gradient"
          />
        </div>
      </div>
    );
  };

  renderContent = () => {
    return this.props.lists.length > 0
      ? this.renderLists()
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
