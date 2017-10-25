import React from 'react';

class PingServerButton extends React.Component {
  pingServer() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
       
      }
    };

    try {
      xhttp = "";
      xhttp.open("GET", "http://localhost:8080/logger.js", true);
      //xhttp.open("GET", "http://localhost:8080/cspire", true);
      xhttp.send();
    } catch(e) {
      throw new Error('blah');
    }
  }

  render() {
    return (
      <button className="serverbtn" onClick={() => this.pingServer()}>
        {this.props.value}
      </button>
    );
  }
}

export default PingServerButton;