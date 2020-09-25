import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const storeInstance = createStore(
  combineReducers({}),
  applyMiddleware()
);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();