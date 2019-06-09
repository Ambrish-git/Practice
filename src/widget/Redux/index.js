import React from "react";
import {render} from "react-dom";
import { Provider } from 'react-redux';
import App from './Component/App/index.jsx';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer/index';

// create redux store and thunk for async actions
const store = createStore(reducer,
    applyMiddleware(thunk));
const wrapper = document.getElementById("redux");
wrapper ?   render( <Provider  store={store}>
    <App />
  </Provider>, wrapper) : false;