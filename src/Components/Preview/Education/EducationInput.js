/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class EducationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  preventDefault = (e) => {
    e.preventDefault();
  };

  showInput = () => {
    return (
      <form onSubmit={this.preventDefault}>
        <input
          type="text"
          id="school-input"
          placeholder="The Odin Project"
          onChange={this.props.updateInfo}
          value="school"
        ></input>
        <input
          type="text"
          id="years-input"
          placeholder="2020-2022"
          onChange={this.props.updateInfo}
          value="years"
        ></input>
        <input
          type="text"
          id="concentration-input"
          placeholder="Full-stack web development"
          onChange={this.props.updateInfo}
          value="concentration"
        ></input>
        <input
          type="submit"
          value="submit"
          id={this.props.value}
          onClick={this.props.revertEditState}
        ></input>{' '}
      </form>
    );
  };

  handleRender = () => {
    if (this.props.edit === true) {
      return this.showInput();
    } else {
      return (
        <div className="Preview-education-entry">
          <div className="Preview-education-year">
            <p>{this.props.years}</p>
          </div>
          <div className="Preview-education-school">
            <h3>{this.props.school}</h3>
            <p>{this.props.concentration}</p>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.handleRender()}</div>;
  }
}
export default EducationInput;
