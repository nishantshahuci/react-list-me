import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../Button/Button';
import Title from '../Title/Title';
import ItemField from '../ItemField/ItemField';

import { fetchLists } from '../../actions';
import history from '../../history';

class Dashboard extends Component {
  componentDidMount = () => {
    if (this.props.isSignedIn) {
      this.props.fetchLists();
    }
  };

  renderInitial = () => {
    return (
      <Fragment>
        <h2 className="dashboard__initial-main">You don't have any lists!</h2>
        <h3 className="dashboard__initial-sub">
          Get started by clicking the button below
        </h3>
      </Fragment>
    );
  };

  onListDelete = id => {
    console.log('delete list with id ' + id);
  };

  onListEdit = (id, title) => {
    console.log('update list with id ' + id + ' and title ' + title);
  };

  onListClick = id => {
    history.push(`/list/${id}`);
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

  renderContent = () => {
    return this.props.lists.length > 0
      ? this.renderLists()
      : this.renderInitial();
  };

  renderComponent = () => {
    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <Title titleText="Dashboard" />
          {this.renderContent()}
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Create"
            btnTextClasses="btn--text-gradient"
          />
        </div>
      </div>
    );
  };

  render = () => {
    if (this.props.isSignedIn) {
      return this.renderComponent();
    } else {
      return <Redirect to="/login" />;
    }
  };
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.user.isSignedIn,
    lists: Object.values(state.lists)
  };
};

export default connect(
  mapStateToProps,
  { fetchLists }
)(Dashboard);
