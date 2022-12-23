import React , {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
import HomeworkApp from './homework/homework'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from './BootstrapTest.js'


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
  <StrictMode>
    <App/>
  </StrictMode>
);

const homeworkApp = ReactDOM.createRoot(document.getElementById('homework-app'));

homeworkApp.render(
  <HomeworkApp counter={0}/>, 
);


const BootstrapTestPage = ReactDOM.createRoot(document.getElementById('bootstrap-test'));


BootstrapTestPage.render(
  <BootstrapTest/> 
);
