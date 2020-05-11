import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageUsers from './reducers/manageUsers'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(manageUsers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)