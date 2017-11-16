//tab component
import React, { Component } from 'react';
import './TabComponent.css';

class TabComponent extends Component {
  tabClicked(tab) {
    console.log("tab clicked: "+tab);
  }

  render() {
    return (
      <div class="flex-container">
        <div class="flex-item" onClick={this.tabClicked}>tab 1</div>
        <div class="flex-item" onClick={this.tabClicked}>tab 2</div>
        <div class="flex-item" onClick={this.tabClicked}>tab 3</div>
        <div class="flex-item" onClick={this.tabClicked}>tab 4</div>
      </div>
    );
  }
}

export default TabComponent;