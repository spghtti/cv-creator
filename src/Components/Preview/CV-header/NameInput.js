/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class NameInput extends Component {
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
          id={this.props.id}
          onChange={this.props.updateInfo}
          htmlFor={this.props.value}
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
        <div value={this.props.value} onClick={this.props.triggerEditState}>
          <h2 id="Preview-first-last" value={this.props.value}>
            {this.props.info}
          </h2>
        </div>
      );
    }
  };

  render() {
    return <div> {this.handleRender()}</div>;
  }
}
export default NameInput;
