import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Clock date={this.state.date} />
      </div>
    );
  }
}

export default App;
