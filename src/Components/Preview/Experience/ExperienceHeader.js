/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class PreviewExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [],
      edit: false,
    };
  }

  submitExp = () => {
    const employer = document.getElementById('exp-employer-input').value;
    const role = document.getElementById('exp-role-input').value;
    const years = document.getElementById('exp-years-input').value;
    const array = [...this.state.experience];
    const form = document.getElementById('experience-form');
    array.push({ employer: employer, role: role, years: years });
    this.setState({ experience: array });
    form.reset();
  };

  preventDefault = (event) => {
    event.preventDefault();
  };

  showInput = () => {
    return (
      <form id="experience-form" onSubmit={this.preventDefault}>
        <input
          type="text"
          placeholder="Employer"
          id="exp-employer-input"
        ></input>
        <input type="text" placeholder="Role" id="exp-role-input"></input>
        <input type="text" placeholder="Years" id="exp-years-input"></input>
        <input
          type="submit"
          value="submit"
          className="form-button"
          onClick={this.submitExp}
        ></input>
      </form>
    );
  };

  setEdit = () => {
    if (this.state.edit === true) {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  handleRender = () => {
    if (this.state.edit === true) {
      return this.showInput();
    }
  };

  render() {
    return (
      <div className="Preview-experience-main">
        <div className="Preview-experience-header">
          <h2>EXPERIENCE</h2>
        </div>
        <div className="Open-modal-button-div">
          <button className="open-modal-button" onClick={this.setEdit}>
            +
          </button>
        </div>
        {this.handleRender()}
        <ExperienceInput experience={this.state.experience} />
      </div>
    );
  }
}
export default PreviewExperience;
