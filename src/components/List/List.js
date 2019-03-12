import React, { Component } from 'react';

import Title from '../Title/Title';
import ItemField from '../ItemField/ItemField';

class List extends Component {
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

  render = () => {
    return (
      <div className="list">
        <div className="list__container">
          <Title titleText={this.props.list.title} />
          {this.renderList()}
        </div>
      </div>
    );
  };
}

export default List;
