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
    const value = e.target.attributes.value.value;
    if (e.target.type !== 'text') {
      if (value === 'name') {
        this.setState({ nameEdit: !this.state.nameEdit });
      }
      if (value === 'title') {
        this.setState({ titleEdit: !this.state.titleEdit });
      }
    }
  };

  revertEditState = (e) => {
    const id = e.target.attributes.id.nodeValue;
    if (id === 'name') {
      this.setState({ nameEdit: !this.state.nameEdit });
    }
    if (id === 'title') {
      this.setState({ titleEdit: !this.state.titleEdit });
    }
  };

  updateInfo = (e) => {
    const input = e.target.attributes.for.nodeValue;
    if (input === 'name') {
      this.setState({ name: e.target.value });
    }
    if (input === 'title') {
      this.setState({ title: e.target.value });
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
