import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import App from './app';

import AppReducer from './state-management/app-reducer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    AppReducer, 
    composeEnhancer(applyMiddleware(thunk)),
);
const StoreApp = <Provider store={store}><App /></Provider>;

ReactDOM.render(StoreApp, document.getElementById('root'));