/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class SkillList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.skills.map((skill, index) => (
          <li key={index}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default SkillList;
