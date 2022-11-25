import React from 'react'
import { render } from 'react-dom';
import App from './App'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
