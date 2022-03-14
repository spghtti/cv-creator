/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Person from './Profile/Person';
import PreviewMain from './PreviewMain';
import Education from './Profile/Education';
import Experience from './Profile/Experience';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-main">
        <div className="App-info-div">
          <div className="App-info">
            <Person />
            <Education />
            <Experience />
          </div>
        </div>
        <div className="App-preview">
          <PreviewMain />
        </div>
      </div>
    );
  }
}

export default Main;
