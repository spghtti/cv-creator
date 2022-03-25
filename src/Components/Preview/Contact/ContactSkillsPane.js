/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Skills from '../Skills/Skills';
import ContactInput from './ContactInput';

class ContactPane extends Component {
  constructor(props) {
    super(props);
    this.revertEditState = this.revertEditState.bind(this);
    this.state = {
      addressEdit: false,
      phoneEdit: false,
      emailEdit: false,
      websiteEdit: false,
      address: '1234 Main Street, Anytown, USA 54321',
      phone: '202-555-5839',
      email: 'jhndoe@gmail.com',
      website: 'jdwebbdev.io',
    };
  }

  triggerEditState = (e) => {
    const value = e.target.attributes.value.value;
    if (e.target.type !== 'text') {
      if (value === 'address') {
        this.setState({ addressEdit: !this.state.addressEdit });
      }
      if (value === 'phone') {
        this.setState({ phoneEdit: !this.state.phoneEdit });
      }
      if (value === 'email') {
        this.setState({ emailEdit: !this.state.emailEdit });
      }
      if (value === 'website') {
        this.setState({ websiteEdit: !this.state.websiteEdit });
      }
    }
  };

  revertEditState = (e) => {
    const id = e.target.attributes.id.nodeValue;
    if (id === 'address') {
      this.setState({ addressEdit: !this.state.addressEdit });
    }
    if (id === 'phone') {
      this.setState({ phoneEdit: !this.state.phoneEdit });
    }
    if (id === 'email') {
      this.setState({ emailEdit: !this.state.emailEdit });
    }
    if (id === 'website') {
      this.setState({ websiteEdit: !this.state.websiteEdit });
    }
  };

  updateInfo = (e) => {
    const input = e.target.attributes.for.nodeValue;
    if (input === 'address') {
      this.setState({ address: e.target.value });
    }
    if (input === 'phone') {
      this.setState({ phone: e.target.value });
    }
    if (input === 'email') {
      this.setState({ email: e.target.value });
    }
    if (input === 'website') {
      this.setState({ website: e.target.value });
    }
  };

  showPreview = (e) => {
    if (e.target.files.length > 0) {
      const image = URL.createObjectURL(e.target.files[0]);
      const preview = document.getElementById('Preview-profile-picture');
      preview.src = image;
      preview.style.height = '100%';
      preview.style.width = '100%';
      preview.style.borderRadius = '50%';
      preview.style.overflow = 'hidden';
      preview.style.display = 'block';
    }
  };

  render() {
    return (
      <div className="Preview-contact-skills-pane">
        <div className="Preview-picture" id="Preview-picture">
          <img id="Preview-profile-picture" alt="" />
          <div id="Preview-upload-container">
            <label className="upload-label" id="upload-label">
              +
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={this.showPreview}
              ></input>
            </label>
          </div>
        </div>
        <div className="Preview-contact-info">
          <div className="Preview-panel-div">
            <div className="Preview-panel-headline">
              <h2>CONTACT</h2>
            </div>
            <div className="Preview-contact-div" value="address">
              <img
                alt=""
                src={require('../Icons/pin.png')}
                className="Preview-icon"
              />
              <ContactInput
                value="address"
                edit={this.state.addressEdit}
                info={this.state.address}
                revertEditState={this.revertEditState}
                triggerEditState={this.triggerEditState}
                updateInfo={this.updateInfo}
                id="address-input"
              />
            </div>
            <div className="Preview-contact-div" value="phone">
              <img
                alt=""
                src={require('../Icons/phone.png')}
                className="Preview-icon"
              />
              <ContactInput
                value="phone"
                edit={this.state.phoneEdit}
                info={this.state.phone}
                revertEditState={this.revertEditState}
                triggerEditState={this.triggerEditState}
                id="phone-input"
                updateInfo={this.updateInfo}
              />
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('../Icons/envelope.png')}
                className="Preview-icon"
              />
              <ContactInput
                value="email"
                edit={this.state.emailEdit}
                info={this.state.email}
                revertEditState={this.revertEditState}
                triggerEditState={this.triggerEditState}
                updateInfo={this.updateInfo}
                id="email-input"
              />
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('../Icons/cursor.png')}
                className="Preview-icon"
              />
              <ContactInput
                value="website"
                edit={this.state.websiteEdit}
                info={this.state.website}
                revertEditState={this.revertEditState}
                triggerEditState={this.triggerEditState}
                updateInfo={this.updateInfo}
                id="website-input"
              />
            </div>
          </div>
        </div>
        <Skills />
      </div>
    );
  }
}
export default ContactPane;
