import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Title from '../Title/Title';
import ItemField from '../ItemField/ItemField';
import Button from '../Button/Button';

import { fetchList, addItem, editItem, deleteItem } from '../../actions';

class List extends Component {
  componentDidMount = () => {
    if (this.props.isSignedIn) {
      this.props.fetchList(this.props.match.params.id);
    }
  };

  onItemEditComplete = (id, title, complete) => {
    this.props.editItem(this.props.list.id, id, title, complete);
  };

  onItemDelete = id => {
    this.props.deleteItem(this.props.list.id, id);
  };

  onAddClick = () => {
    this.props.addItem(this.props.list.id, 'New Item', 'false');
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
                onItemEdit={(id, title) =>
                  this.onItemEditComplete(id, title, item.complete)
                }
                onItemClick={id =>
                  this.onItemEditComplete(id, item.title, !item.complete)
                }
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
          <Button
            btnClasses="btn btn--lighter btn--hover-gradient"
            btnText="Add"
            btnTextClasses="btn--text-gradient"
            onClick={this.onAddClick}
          />
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
  { fetchList, addItem, editItem, deleteItem }
)(List);
