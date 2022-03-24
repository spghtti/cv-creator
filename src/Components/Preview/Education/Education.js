import React, { Component } from 'react';
import EducationInput from './EducationInput';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      edit: false,
    };
  }

  submitEdu = () => {
    const school = document.getElementById('school-input').value;
    const concentration = document.getElementById('concentration-input').value;
    const years = document.getElementById('edu-years-input').value;
    const array = [...this.state.education];
    const form = document.getElementById('education-form');
    array.push({
      school: school,
      concentration: concentration,
      years: years,
    });
    this.setState({ education: array });
    form.reset();
  };

  preventDefault = (event) => {
    event.preventDefault();
  };

  showInput = () => {
    return (
      <form id="education-form" onSubmit={this.preventDefault}>
        <input type="text" placeholder="School" id="school-input"></input>
        <input
          type="text"
          placeholder="Concentration"
          id="concentration-input"
        ></input>
        <input type="text" placeholder="Years" id="edu-years-input"></input>
        <input
          type="submit"
          value="submit"
          className="form-button"
          onClick={this.submitEdu}
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
      <div className="Preview-education-main">
        <div className="Preview-education-header">
          <h2>EDUCATION</h2>
        </div>
        <button className="open-modal-button" onClick={this.setEdit}>
          +
        </button>
        {this.handleRender()}
        <EducationInput education={this.state.education} />
      </div>
    );
  }
}
export default Education;
