import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

//import { browserHistory } from 'react-router/es/browserHistory';
//import history from '../node_modules/history';
//import { createHashHistory } from 'history'
import {createBrowserHistory} from 'history';

//const browserHistory = createHashHistory()
const browserHistory = createBrowserHistory();


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

// registerServiceWorker(); ?? GNT code
serviceWorker.unregister();
