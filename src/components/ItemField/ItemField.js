import React, { Component } from 'react';

class ItemField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: this.props.title
    };
  }

  handleItemDelete = event => {
    this.props.onItemDelete(this.props.id);
  };

  handleInputChange = event => {
    this.setState({ title: event.target.value });
  };

  handleInputBlur = event => {
    this.setState({ edit: false });
    this.props.onItemEdit(this.props.id, event.target.value);
  };

  handleInputClick = event => {
    if (!this.state.edit) {
      this.props.onItemClick(this.props.id);
    }
  };

  render = () => {
    const { edit, title } = this.state;
    return (
      <div className="list-field" onClick={this.handleInputClick}>
        <div
          className="list-field__icon--edit"
          onClick={() => this.setState({ edit: true })}
        >
          <i className="fas fa-pen fa-2x" />
        </div>
        <div
          className="list-field__icon--delete"
          onClick={this.handleItemDelete}
        >
          <i className="fas fa-trash fa-2x" />
        </div>
        <input
          className="list-field__input"
          disabled={!edit}
          value={title}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
        />
      </div>
    );
  };
}

export default ItemField;
