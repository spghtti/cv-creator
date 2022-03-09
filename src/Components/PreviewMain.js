/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PreviewNameTitle from './Preview/NameTitle';
import ContactSkillsPane from './Preview/ContactSkillsPane';
import PreviewExperience from './Preview/PreviewExperience';

class PreviewMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-main">
        <ContactSkillsPane />
        <PreviewNameTitle />
        <PreviewExperience />
      </div>
    );
  }
}
export default PreviewMain;
