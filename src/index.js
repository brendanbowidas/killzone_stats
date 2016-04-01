import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise/lib';
import createLogger from 'redux-logger'

import App from './components/app';
import reducers from './reducers';

const middlewares = [ReduxPromise]

if(process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger)
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
