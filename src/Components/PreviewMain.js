/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PreviewNameTitle from './Preview/NameTitle';
import ContactSkillsPane from './Preview/ContactSkillsPane';

class PreviewMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-main">
        <ContactSkillsPane />
        <PreviewNameTitle />
      </div>
    );
  }
}
export default PreviewMain;
