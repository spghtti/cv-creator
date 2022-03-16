/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class ContactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  showInput = () => {
    return (
      <div>
        <h3>{this.state.value}</h3>
        <input
          type="text"
          placeholder="1234 Main Street, Anytown, USA 54321"
          id="address-input"
        ></input>
        <input
          type="submit"
          value="submit"
          onClick={this.props.revertEditState}
        ></input>{' '}
      </div>
    );
  };

  handleRender = () => {
    if (this.props.edit === true) {
      return this.showInput();
    }
    if (this.props.edit === false) {
      return <div className="placeholder">{this.props.address}</div>;
    }
  };

  render() {
    return <div>{this.handleRender()}</div>;
  }
}
export default ContactInput;
