import React from 'react';

class Autocomplete extends React.Component {
  constructor () {
    super();
    this.state = {
      inputVal: ''
    };
  }

  handleChange (event) {
    this.setState({
      inputVal: event.target.value
    });
  }

  render () {
    let names = this.props.names;
    names = names.filter(name => (
      name.toLowerCase().indexOf(
        this.state.inputVal.toLowerCase()
      ) !== -1));
    names = names.map(name => (
      <li key={name}>{name}</li>
    ));
    return (
      <div className='autocomplete'>
        <input type='text'
               placeholder='Enter a name...'
               onChange={this.handleChange.bind(this)}
               value={this.state.inputVal}/>
        <ul>
          {names}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
