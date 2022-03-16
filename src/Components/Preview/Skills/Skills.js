/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.setEdit = this.setEdit.bind(this);
    this.state = {
      edit: false,
      skills: [],
    };
  }

  updateSkills = (e) => {
    const array = [...this.state.skills];
    array.push(e.target.value);
  };

  showInput = () => {
    return (
      <div className="input-form">
        <input
          type="text"
          placeholder="Your skill"
          onChange={this.updateSkills}
        ></input>
        <input
          type="button"
          value="submit"
          className="form-button"
          onClick={this.submitSkills}
        ></input>
      </div>
    );
  };

  showSkills = () => {
    this.state.skills.map((t, index) => (
      <li key={index}>
        <span>{t}</span>
      </li>
    ));
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
    if (this.state.edit === false) {
      return this.showSkills();
    }
  };

  render() {
    return (
      <div className="Preview-skills">
        <div className="Preview-panel-div">
          <div className="Preview-panel-headline">
            <h2>SKILLS</h2>
          </div>
        </div>
        {this.handleRender()}
        <div className="Open-modal-button-div">
          <ul className="Preview-panel-list">
            <button className="open-modal-button" onClick={this.setEdit}>
              +
            </button>
            <ul></ul>
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
