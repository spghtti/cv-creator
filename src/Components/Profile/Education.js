/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Education-main">
        <h2>Education</h2>
        <div className="input-div">
          <div>
            <label for="school-name-input">School:</label>
            <input
              type="text"
              className="text-input"
              id="school-name-input"
            ></input>
          </div>
          <div>
            <label for="degree-input">Degree:</label>
            <input type="text" className="text-input" id="degree-input"></input>
          </div>
          <div>
            <label for="major-input">Concentration:</label>
            <input type="text" className="text-input" id="major-input"></input>
          </div>
          <div>
            <label for="college-year-input">Years:</label>
            <input
              type="text"
              className="text-input"
              id="college-year-input"
            ></input>
          </div>
          <div>
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
