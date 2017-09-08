import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root></Root>,
    document.querySelector('main')
  );
});
