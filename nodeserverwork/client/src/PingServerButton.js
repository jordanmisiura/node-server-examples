import React from 'react';

class PingServerButton extends React.Component {
  pingServer() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("xhttp request object finished.");
      }
    };

    console.log("pushing button");

    //xhttp.open("GET", "http://localhost:8080/cspire", true);
    //xhttp.send();

    xhttp.open("POST", 'http://localhost:8080/password', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("password=myPassword&somevariable=poop");
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