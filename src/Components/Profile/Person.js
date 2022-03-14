/* eslint-disable no-useless-constructor */
/* eslint-disable no-restricted-globals */

import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.setPerson = this.setPerson.bind(this);
    this.state = {
      name: 'Jim Doe',
      title: 'Full-stack web developer',
      address: '555 main street',
      phone: '202-555-1113',
      email: 'johndoe392342@gmail.com',
      website: 'johndoe392342.io',
    };
  }

  setPerson = () => {
    // const input = document.getElementById('task-name');
    // const array = [...this.state.tasklist];
    // array.push(input.value);
    // this.setState({
    //   tasklist: array,
    // });
    // input.value = '';
  };

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
            <label for="website-input">Website:</label>
            <input
              type="text"
              className="text-input"
              id="website-input"
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
export default Person;
