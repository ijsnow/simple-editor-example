import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import './index.css';
import './helpers';

import App from './components/App';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
