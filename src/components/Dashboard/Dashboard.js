import React, { Component, Fragment } from 'react';

import Button from '../Button/Button';
import Title from '../Title/Title';

class Dashboard extends Component {
  renderInitial = () => {
    return (
      <Fragment>
        <div className="dashboard__header--main">You don't have any lists!</div>
        <div className="dashboard__header--sub">
          Get started by clicking the button below
        </div>
        <div className="dashboard__button--empty">
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
    return <div>Lists</div>;
  };

  renderContent = () => {
    return this.props.lists.length > 0
      ? this.renderLists()
      : this.renderInitial();
  };

  render = () => {
    return (
      <div className="dashboard">
        <Title titleText="Dashboard" />
        {this.renderContent()}
      </div>
    );
  };
}

export default Dashboard;
