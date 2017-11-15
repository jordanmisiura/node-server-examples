import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true
    };
  }

  componentDidMount() {
    this.setState({
      hasHeader: false
    });
  }

  render() {
    return this.state.hasHeader ? (
      <div className="App">
        <p className="App-intro">
          App.js div and p  component mounted.
        </p>
      </div>
    ) : ( <div></div> );
  }
}

export default App;
