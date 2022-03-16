import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-education-main">
        <div className="Preview-education-header">
          <h2>EDUCATION</h2>
        </div>
        <div className="Preview-education-entry">
          <div className="Preview-education-year">
            <p>2012-2016</p>
          </div>
          <div className="Preview-education-school">
            <h3>Harvard</h3>
            <p>Computer Science</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
