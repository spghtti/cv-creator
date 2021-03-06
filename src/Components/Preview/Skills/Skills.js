/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import SkillList from './SkillList';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      skills: [],
    };
  }

  submitSkills = () => {
    const input = document.getElementById('skill-input');
    const array = [...this.state.skills];
    array.push(input.value);
    this.setState({ skills: array });
    input.value = '';
  };

  preventDefault = (event) => {
    event.preventDefault();
  };

  showInput = () => {
    return (
      <form className="input-form" onSubmit={this.preventDefault}>
        <input type="text" placeholder="Skill" id="skill-input"></input>
        <input
          type="submit"
          value="submit"
          className="form-button"
          onClick={this.submitSkills}
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
      <div className="Preview-skills">
        <div className="Preview-panel-div">
          <div className="Preview-panel-headline">
            <h2>SKILLS</h2>
          </div>
        </div>
        <ul className="Preview-panel-list">
          <div className="Open-modal-button-div">
            <button className="open-modal-button" onClick={this.setEdit}>
              +
            </button>
          </div>
          {this.handleRender()}
          <SkillList skills={this.state.skills} />
        </ul>
      </div>
    );
  }
}
export default Skills;
