/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Experience-main">
        <h2>Experience</h2>
        <div className="input-div">
          <div>
            <label for="employer-input">Employer:</label>
            <input
              type="text"
              className="text-input"
              id="employer-input"
            ></input>
          </div>
          <div>
            <label for="job-title-input">Job:</label>
            <input
              type="text"
              className="text-input"
              id="job-title-input"
            ></input>
          </div>
          <div>
            <label for="job-year-input">Years:</label>
            <input
              type="text"
              className="text-input"
              id="job-year-input"
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
export default Experience;
