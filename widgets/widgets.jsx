import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root></Root>,
    document.querySelector('main')
  );
});
