import React, { Component } from 'react';
import ToDoList from './ToDoList';
import MyForm from './MyForm';

class Todos extends Component {
  constructor(props) {
        super(props);
        this.state = {text:"random Text", todoList:["shopping", "sport", "cooking"]};

    };
  onButtonClick = () =>{
        // var todo = document.getElementById("txtTodo").value;
        var todo = this.state.text;
        this.setState((state, props) => {
            return {todoList: state.todoList.concat([todo]), text:"" };
        })

    };
  onTextChange = (e) =>{
      let val = e.target.value;
      console.log(val)
      this.setState((state, props) => {
          return {text: val}
      })
    
  };

  render() {
    return (
      <div>
          <h1>{this.state.text}</h1>
      <MyForm onChange={this.onTextChange} onClick={this.onButtonClick}
       buttonText={this.props.buttonText}
       ref={(form)=>this.myForm = form} buttonText={this.props.buttonText} text={this.state.text}/>
      <ToDoList todoList={this.state.todoList}/>
      </div>
      
    );
  }
}


export default Todos;