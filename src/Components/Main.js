/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PreviewMain from './PreviewMain';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-preview">
        <PreviewMain />
      </div>
    );
  }
}

export default Main;
