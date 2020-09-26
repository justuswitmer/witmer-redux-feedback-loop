import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const valueReducer = (state = [], action) => {
  if (action.type === "SET_VALUE") {
    console.log("in valueReducer", state);
    return action.payload;
  }
  console.log(state);
  return state;
}


const storeInstance = createStore(
  combineReducers({
    valueReducer
  }),
  applyMiddleware()
);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();