import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const startApp = () => {
  Sentry.init('WHATEVER_GOES_HERE');
  ReactDOM.render(<App Sentry={Sentry} />, document.getElementById('root'));
  registerServiceWorker();
};

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
