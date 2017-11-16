import React, { Component } from 'react';
import './App.css';

import TabComponent from './TabComponent.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true
    };
  }

  componentDidMount() {
    this.setState({
      hasHeader: true
    });
  }

  render() {
    return this.state.hasHeader ? (
      <div className="App">
        <p className="App-intro">
          App.js div and p  component mounted.
        </p>
        <TabComponent />
      </div>
    ) : ( <div></div> );
  }
}

export default App;
