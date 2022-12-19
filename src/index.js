import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world');

const text = 'Hi, Julia';

const elements = (
  <div>
      <h2 className="title">Teкст: {text}</h2>
      <input type='text'/>
      <label htmlFor="btn"></label>
      <button id="btn" tabIndex={0}>cool</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);
