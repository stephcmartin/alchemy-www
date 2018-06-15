import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

import App from './App';
import './index.css';

const history = createHistory();

const middleWare = [
  thunk,
  ReduxPromise,
  routerMiddleware(history)
]

const mid = compose (applyMiddleware(...middleWare))
const store = createStore(
  rootReducer,
  mid
)

ReactDOM.render(
  <Provider store={store} history={history}>
  <App />
  </Provider>
  , document.getElementById('root'));
