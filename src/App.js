import React, { Component } from 'react';
import ColorChanger from './ColorChanger';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
  }

  changeColor = () => {
    this.setState({
      color: 'green'
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <ColorChanger change={this.changeColor} />
      </div>
    );
  }
}

export default App;
