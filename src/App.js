import React, { Component } from 'react';
import Todos from './Todos';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.applicationName}</h1>
        </header>
        <Todos buttonText={this.props.buttonText}/>
      </div>
    );
  }
}

App.propTypes = {
  applicationName: PropTypes.string.isRequired,
};

export default App;
