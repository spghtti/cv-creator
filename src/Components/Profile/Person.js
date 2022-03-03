/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Person-main">
        <h2>Personal info</h2>
        <div className="input-div">
          <div>
            <label for="name-input">Name:</label>
            <input type="text" className="text-input" id="name-input"></input>
          </div>
          <div>
            <label for="title-input">Job title:</label>
            <input type="text" className="text-input" id="title-input"></input>
          </div>
          <div>
            <label for="address-input">Address:</label>
            <input
              type="text"
              className="text-input"
              id="address-input"
            ></input>
          </div>
          <div>
            <label for="phone-input">Phone number:</label>
            <input type="text" className="text-input" id="phone-input"></input>
          </div>
          <div>
            <label for="email-input">Email:</label>
            <input type="text" className="text-input" id="email-input"></input>
          </div>
          <div>
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Person;
