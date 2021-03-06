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
          <h3 className="Preview-contact-div-headline">{this.props.value}</h3>
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
