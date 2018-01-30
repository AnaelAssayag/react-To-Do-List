import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {

  render() {
    return (
      <ul>
        {this.props.todoList.map((item,index)=><ToDoItem key={index} item={item}/>)}
     </ul>
    );
  }
}

export default ToDoList;