import React, { Component } from 'react';

class ItemField extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.state = {
      edit: false,
      title: this.props.title
    };
  }

  handleItemEdit = () => {
    const edit = this.state.edit;
    this.setState({ edit: !edit }, () => {
      this.input.focus();
    });
  };

  handleItemDelete = () => {
    this.props.onItemDelete(this.props.id);
  };

  handleInputChange = event => {
    this.setState({ title: event.target.value });
  };

  handleInputBlur = event => {
    this.setState({ edit: false });
    this.props.onItemEdit(this.props.id, event.target.value);
  };

  handleInputClick = () => {
    if (!this.state.edit) {
      this.props.onItemClick(this.props.id);
    }
  };

  render = () => {
    const { edit, title } = this.state;
    return (
      <div className="item-field">
        <div className="item-field__icon--edit" onClick={this.handleItemEdit}>
          <i className="fas fa-pen fa-2x" />
        </div>
        <div
          className="item-field__icon--delete"
          onClick={this.handleItemDelete}
        >
          <i className="fas fa-trash fa-2x" />
        </div>
        <div className="item-field__input-div" onClick={this.handleInputClick}>
          <input
            className="item-field__input"
            disabled={!edit}
            value={title}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            ref={element => (this.input = element)}
            required
          />
        </div>
      </div>
    );
  };
}

export default ItemField;
