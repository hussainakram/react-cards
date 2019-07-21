import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css'

class Main extends React.Component {
  render() {
    let props = this.props;
    return(
      <div className="card w-30 m-5">
        <h5 className="card-title p-4">{props.title}</h5>
        <div className="card-body">
          {props.children}
       </div>
      </div>
    )
  }
}

export default Main;
