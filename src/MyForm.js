import React, { Component } from 'react';
import Todos from './Todos';

class MyForm extends Component {

render() {
    return (
        <form>
        <input type="text" onChange={this.props.onChange} id="txtTodo" 
        ref={(input)=>this.textInput=input} value={this.props.text}/>
        <button  type="button" onClick={this.props.onClick}>{this.props.buttonText}</button>
      </form>
    );

}



}


export default MyForm;