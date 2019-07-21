import React from 'react';
import Card from '../Card/Card.js'

class CurrentTime extends React.Component {
  constructor() {
    super();
    this.state = {currentTime: ''}
  }

  componentDidMount() {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      this.setState({currentTime: time})
    }, 1000)
  }

  render() {
    return(
      <Card title="Component with state (currenrTime)">
      <h3>Current Time is: {this.state.currentTime}</h3>
      </Card>
    )
  }
}

export default CurrentTime;
