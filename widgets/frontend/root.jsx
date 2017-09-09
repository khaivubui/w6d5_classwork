import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

class Root extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='root'>
        <div>
          <Clock/>
          <Weather/>
          <Tabs tabs={Root.TABS}/>
          </div>
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

Root.TABS = [
  {
    title: 'Apple',
    content: 'The apple tree (Malus pumila, commonly and erroneously called Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.'
  },
  {
    title: 'Banana',
    content: 'The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas.'
  },
  {
    title: 'Cranberry',
    content: 'Cranberries are a group of evergreen dwarf shrubs or trailing vines in the subgenus Oxycoccus of the genus Vaccinium. In Britain, cranberry may refer to the native species Vaccinium oxycoccos, while in North America, cranberry may refer to Vaccinium macrocarpon.'
  }
];

export default Root;
