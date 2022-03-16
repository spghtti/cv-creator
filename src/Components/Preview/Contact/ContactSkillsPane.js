/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Skills from '../Skills/Skills';
import ContactInput from './ContactInput';

class ContactPane extends Component {
  constructor(props) {
    super(props);
    this.revertEditState = this.revertEditState.bind(this);
    this.state = {
      edit: false,
      address: '1234 Main Street, Anytown, USA 54321',
      phone: '',
      email: '',
      website: '',
    };
  }

  updateAddress = (e) => {
    const input = document.getElementById('address-input');
    this.setState({ address: input.value });
    input.textContent = `${this.state.address}`;
  };

  triggerEditState = (e) => {
    if (e.target.type !== 'text') {
      this.setState({ edit: !this.state.edit });
    }
  };

  revertEditState = () => {
    const input = document.getElementById('address-input');
    this.setState({ address: input.value });
    input.textContent = `${this.state.address}`;
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div className="Preview-contact-skills-pane">
        <div className="Preview-picture"></div>
        <div className="Preview-contact-info">
          <div className="Preview-panel-div">
            <div className="Preview-panel-headline">
              <h2>CONTACT</h2>
            </div>
            <div
              className="Preview-contact-div"
              onClick={this.triggerEditState}
            >
              <img
                alt=""
                src={require('../Icons/pin.png')}
                className="Preview-icon"
              />
              <ContactInput
                value="Address"
                edit={this.state.edit}
                address={this.state.address}
                revertEditState={this.revertEditState}
              />
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('../Icons/phone.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Phone</h3>
                <input
                  type="text"
                  placeholder="202-555-0159"
                  id="phone-input"
                ></input>
              </div>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('../Icons/envelope.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Email</h3>
                <input
                  type="text"
                  placeholder="johndoe392342@gmail.com"
                  id="email-input"
                ></input>
              </div>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('../Icons/cursor.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Website</h3>
                <input
                  type="text"
                  placeholder="johndoe392342.io"
                  id="website-input"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    );
  }
}
export default ContactPane;
