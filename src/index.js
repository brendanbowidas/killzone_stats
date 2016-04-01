import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise/lib';
import createLogger from 'redux-logger'

import App from './components/app';
import reducers from './reducers';
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
