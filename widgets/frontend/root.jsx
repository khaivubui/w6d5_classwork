import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Root extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Clock/>
        <Weather/>
        <Autocomplete names={Root.NAMES}/>
      </div>
    );
  }
}

Root.NAMES = [
  'Josefa Harrison',
  'Xuan Malson',
  'Robbi Eisele',
  'Jodi Wieland',
  'Ricarda Seeman',
  'Yessenia Belford',
  'Francie Claw',
  'Pasquale Kugler',
  'Lloyd Worden',
  'Noe Canino'
];

export default Root;
