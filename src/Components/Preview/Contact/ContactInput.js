/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class ContactInput extends Component {
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
        <h3>{this.state.value}</h3>
        <input
          type="text"
          placeholder={this.props.placeholder}
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
        <div
          className="placeholder"
          value={this.props.value}
          onClick={this.props.triggerEditState}
        >
          <h3 className="Preview-contact-div-headline">{this.state.value}</h3>
          {this.props.info}
        </div>
      );
    }
  };

  render() {
    return <div>{this.handleRender()}</div>;
  }
}
export default ContactInput;
