import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Title from '../Title/Title';
import ItemField from '../ItemField/ItemField';

import { fetchList } from '../../actions';

class List extends Component {
  componentDidMount = () => {
    if (this.props.isSignedIn) {
      this.props.fetchList(this.props.match.params.id);
    }
  };

  onItemComplete = id => {
    console.log('mark item with id ' + id + ' complete');
  };

  onItemDelete = id => {
    console.log('delete item with id ' + id);
  };

  onItemEdit = (id, title) => {
    console.log('edit item with id ' + id + ' and title ' + title);
  };

  renderComplete = complete => {
    if (complete) {
      return (
        <div className="list__icon">
          <i className="fas fa-check fa-2x" />
        </div>
      );
    }
  };

  renderList = () => {
    return (
      <div className="list__content">
        {this.props.list.items.map(item => (
          <div key={item.id} className="list__item">
            <div className="list__field">
              <ItemField
                id={item.id}
                title={item.title}
                onItemDelete={this.onItemDelete}
                onItemEdit={this.onItemEdit}
                onItemClick={this.onItemComplete}
              />
            </div>
            {this.renderComplete(item.complete)}
          </div>
        ))}
      </div>
    );
  };

  renderComponent = () => {
    return (
      <div className="list">
        <div className="list__container">
          <Title titleText={this.props.list.title} />
          {this.renderList()}
        </div>
      </div>
    );
  };

  render = () => {
    if (this.props.isSignedIn)
      if (this.props.owner === this.props.list.owner)
        return this.renderComponent();
      else return <Redirect to="/dashboard" />;
    else return <Redirect to="/login" />;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.user.isSignedIn,
    owner: state.user.email,
    list: state.lists[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchList }
)(List);
