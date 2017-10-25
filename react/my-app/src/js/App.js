import React from 'react';
import PingServerBtn from './PingServerButton.js'

class App extends React.Component {
  renderButton(i) {
    return <PingServerBtn value={i} />;
  }

  render() {
    return (
      <div className="App">
        {this.renderButton("click this to ping server")}
      </div>
    );
  }
}

export default App; 