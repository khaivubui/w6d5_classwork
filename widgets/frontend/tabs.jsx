import React from 'react';

class Tabs extends React.Component {
  constructor () {
    super();
    this.state = {
      selected: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab (e) {
    const selected = parseInt(e.target.getAttribute('data'));
    this.setState({ selected });
  }

  render () {
    const { tabs } = this.props;
    const titles = tabs.map((tab, index) => (
      <li key={tab.title}
          className={index === this.state.selected ? 'selected' : ''}
          onClick={this.changeTab}
          data={index}>
        {tab.title}
      </li>
    ));
    const content = tabs[this.state.selected].content;

    return (
      <div className='tabs'>
        <ul>
          {titles}
        </ul>
        <article>
          {content}
        </article>
      </div>
    );
  }
}

export default Tabs;
