import React, { Component } from 'react';

class ExperienceEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-experience-work">
        <div className="Preview-experience-entry">
          <div className="Preview-experience-year">
            <p>2018-2022</p>
          </div>
          <div className="Preview-experience-job">
            <h3>Apple</h3>
            <p>Full-stack web developer</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ExperienceEntry;
