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
            <label for="company-input">Company:</label>
            <input
              type="text"
              className="text-input"
              id="company-input"
            ></input>
          </div>
          <div>
            <label for="role-input">Role:</label>
            <input type="text" className="text-input" id="role-input"></input>
          </div>
          <div>
            <label for="years-input">Years:</label>
            <input type="text" className="text-input" id="years-input"></input>
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
