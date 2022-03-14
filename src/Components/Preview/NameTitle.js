/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class PreviewNameTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-header">
        <div className="Preview-name-title">
          <h2 id="Preview-first-last" contentEditable="true'">
            John Doe
          </h2>
          <p id="Preview-job-title">Full-stack web developer</p>
        </div>
      </div>
    );
  }
}
export default PreviewNameTitle;
