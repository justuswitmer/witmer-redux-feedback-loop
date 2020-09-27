import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const valueReducer = (state = [], action) => {
  if (action.type === "SET_VALUE") {
    let addedValue = action.payload
    console.log("in valueReducer", addedValue);
    return addedValue;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    valueReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();