/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class EducationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  render() {
    return (
      <div>
        {this.props.education.map((edu, index) => (
          <div className="Preview-education-entry" key={index}>
            <div className="Preview-education-year">
              <p>{edu.years}</p>
            </div>
            <div className="Preview-education-school">
              <h3>{edu.school}</h3>
              <p>{edu.concentration}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default EducationInput;
