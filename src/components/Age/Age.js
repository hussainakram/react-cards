import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js'

class Age extends React.Component {
  render() {
    let current_year = new Date().getFullYear();
    let dob_year = new Date(Date.parse(this.props.dob)).getFullYear();
    let calculated_age = current_year - dob_year;

    return(
      <Card title="Class component having props(DOB)">
      <h3>Calculated age is {calculated_age}</h3>
      </Card>
    )
  }
}

Age.protoTypes = {
  dob: PropTypes.instanceOf(Date).isRequired
}

Age.defaultProps = {
  dob: `Apr 13 1994`
}

export default Age;
