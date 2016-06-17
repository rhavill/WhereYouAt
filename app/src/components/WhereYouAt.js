import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import App from './App';
import reducer from '../reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export default class WhereYouAt extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}
