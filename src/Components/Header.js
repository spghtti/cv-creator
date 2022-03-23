/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
    };
  }

  changeButtons = () => {
    const buttons = document.getElementsByTagName('button');

    for (let i = 1; i < buttons.length; i++) {
      this.state.preview
        ? (buttons[i].style.display = 'none')
        : (buttons[i].style.display = '');
    }
  };

  handleButtons = () => {
    const previewButton = document.getElementById('preview-button');
    this.setState({ preview: !this.state.preview });
    this.state.preview
      ? (previewButton.innerText = 'Edit')
      : (previewButton.innerText = 'Preview');
    this.changeButtons();
  };

  render() {
    return (
      <header className="App-header">
        <h1>CV Creator</h1>
        <div></div>
        <div className="preview-mode-div">
          <button onClick={this.handleButtons} id="preview-button">
            Preview
          </button>
        </div>
        <div className="App-subhead">
          <p>
            © 2022{' '}
            <a href="https://github.com/spghtti" className="App-link">
              spghtti{' '}
              <img
                alt=""
                height="15px"
                width="15px"
                src={require('./Preview/Icons/github.png')}
              />
            </a>{' '}
            -- Icons created by{' '}
            <a
              href="https://www.flaticon.com/free-icons/phone"
              title="phone icons"
              className="App-link"
            >
              Freepik
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
