//About test page
import React, { Component } from 'react';
import PingServerBtn from './PingServerButton.js'

class About extends Component {
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

export default About;