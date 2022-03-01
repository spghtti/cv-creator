/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Profile from './Profile/Profile';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-main">
        <Profile />
      </div>
    );
  }
}

export default Main;
