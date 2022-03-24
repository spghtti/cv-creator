/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';

class ExperienceInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-experience-work">
        {this.props.experience.map((exp, index) => (
          <div className="Preview-experience-entry" key={index}>
            <div className="Preview-experience-year">
              <p>{exp.years}</p>
            </div>
            <div className="Preview-experience-job">
              <h3>{exp.employer}</h3>
              <p>{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ExperienceInput;
