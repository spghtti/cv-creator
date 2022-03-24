/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PreviewNameTitle from './Preview/CV-header/NameTitle';
import ContactSkillsPane from './Preview/Contact/ContactSkillsPane';
import Experience from './Preview/Experience/ExperienceHeader';
import Education from './Preview/Education/Education';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-preview">
        <div className="Preview-main">
          <ContactSkillsPane />
          <PreviewNameTitle />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default Main;
