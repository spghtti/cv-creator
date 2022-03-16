/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="App-header">
        <h1>CV Creator</h1>
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
