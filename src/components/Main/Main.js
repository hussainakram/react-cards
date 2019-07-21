import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';
import HelloWorld from '../HelloWorld/HelloWorld';
import Age from '../Age/Age.js';
import CurrentTime from '../CurrentTime/CurrentTime.js';

class Main extends React.Component {
  render() {
    return(
      <div className="d-flex">
        <HelloWorld />
        <Age dob="Apr 13 1994"/>
        <CurrentTime />
      </div>
    )
  }
}

export default Main;
