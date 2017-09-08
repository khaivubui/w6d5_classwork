import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick () {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div className='clock widget'>
        <div>
          Date<br/>Time
        </div>
        <div className='clock-results'>
          { this.state.time.toLocaleDateString() }
          <br/>
          { this.state.time.toLocaleTimeString() }
        </div>
      </div>
    );
  }
}

export default Clock;
