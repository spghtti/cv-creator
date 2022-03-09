/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class ContactSkillsPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Preview-contact-skills-pane">
        <div className="Preview-picture"></div>
        <div className="Preview-contact-info">
          <div className="Preview-panel-div">
            <div className="Preview-panel-headline">
              <h2>CONTACT</h2>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('./Icons/pin.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Address</h3>
                <p>123 Main Street, Anytown, USA 54321</p>
              </div>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('./Icons/phone.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Phone</h3>
                <p>202-555-0159</p>
              </div>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('./Icons/envelope.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Email</h3>
                <p>johndoe392342@gmail.com</p>
              </div>
            </div>
            <div className="Preview-contact-div">
              <img
                alt=""
                src={require('./Icons/cursor.png')}
                className="Preview-icon"
              />
              <div>
                <h3>Website</h3>
                <p>johndoe392342.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Preview-skills">
          <div className="Preview-panel-div">
            <div className="Preview-panel-headline">
              <h2>SKILLS</h2>
            </div>
            <ul className="Preview-panel-list">
              <li>
                <span>This is a Test to </span>
              </li>
              <li>
                <span>Test</span>
              </li>
              <li>
                <span>Test</span>
              </li>
              <li>
                <span>This is a test</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactSkillsPane;
