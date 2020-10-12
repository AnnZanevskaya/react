import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './Redux/root-reducer';
import thunk from 'redux-thunk'

import './Styles/sass/style.scss';

import App from "./App.jsx";
const rootElement = document.getElementById("root");

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
