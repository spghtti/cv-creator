/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import NameInput from './NameInput';
import TitleInput from './TitleInput';

class PreviewNameTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEdit: false,
      titleEdit: false,
      name: 'John Doe',
      title: 'Full-stack web developer',
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
      <div className="Preview-header">
        <div className="Preview-name-title">
          <NameInput
            info={this.state.name}
            edit={this.state.nameEdit}
            value="name"
            id="name-input"
            triggerEditState={this.triggerEditState}
            revertEditState={this.revertEditState}
            updateInfo={this.updateInfo}
          />
          <TitleInput
            info={this.state.title}
            edit={this.state.titleEdit}
            value="title"
            id="title-input"
            triggerEditState={this.triggerEditState}
            revertEditState={this.revertEditState}
            updateInfo={this.updateInfo}
          />
        </div>
      </div>
    );
  }
}
export default PreviewNameTitle;
