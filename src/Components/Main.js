/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Person from './Profile/Person';
import Preview from './Preview/Preview';
import Education from './Profile/Education';
import Experience from './Profile/Experience';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-main">
        <div className="App-info">
          <Person />
          <Education />
          <Experience />
        </div>
        <div className="App-preview">
          <Preview />
        </div>
      </div>
    );
  }
}

export default Main;
