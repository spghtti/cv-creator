/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="App-footer">
        <p>
          Copyright © 2022 <a href="https://github.com/spghtti">spghtti</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
