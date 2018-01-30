import React, { Component } from 'react';

class ToDoItem extends Component {

  render() {
    return (
        <li>{this.props.item}</li>
        
    );
  }
}

export default ToDoItem;