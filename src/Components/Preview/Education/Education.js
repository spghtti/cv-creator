import React, { Component } from 'react';
import EducationInput from './EducationInput';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: '2020-2022',
      school: 'The Odin Project',
      concentration: 'Full-stack web development',
      edit: false,
    };
  }

  triggerEditState = (e) => {
    if (e.target.type !== 'text') {
      this.setState({ edit: !this.state.edit });
    }
  };

  revertEditState = (e) => {
    this.setState({ edit: !this.state.edit });
  };

  updateInfo = (e) => {
    const input = e.target.attributes.for.nodeValue;
    if (input === 'school') {
      this.setState({ school: e.target.value });
    }
    if (input === 'years') {
      this.setState({ years: e.target.value });
    }
    if (input === 'concentration') {
      this.setState({ concentration: e.target.value });
    }
  };

  render() {
    return (
      <div className="Preview-education-main">
        <div className="Preview-education-header">
          <h2>EDUCATION</h2>
        </div>
        <EducationInput
          years={this.state.years}
          school={this.state.school}
          edit={this.state.edit}
          concentration={this.state.concentration}
          value="education"
          id="education-input"
          triggerEditState={this.triggerEditState}
          revertEditState={this.revertEditState}
          updateInfo={this.updateInfo}
        />
      </div>
    );
  }
}
export default Education;
