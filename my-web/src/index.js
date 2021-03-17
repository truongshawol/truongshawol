import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './store'
import * as type from './TypeAction'


import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserCircle, faStoreAlt, faChevronLeft, faChevronRight, 
  faSearch, faCartArrowDown, faBars, faCaretSquareLeft, faCaretSquareRight, faPlusCircle, faMinusCircle} 
from '@fortawesome/free-solid-svg-icons'
library.add(faUserCircle, faStoreAlt, faChevronRight, 
  faChevronLeft, faSearch, faCartArrowDown, faBars, faCaretSquareRight, faCaretSquareLeft, faPlusCircle, faMinusCircle)

function getToken() {
  return localStorage.getItem("token");
}

var token = getToken();
if (token) {
    const data = jwt.decode(token);
    const now = new Date().getTime() / 1000;
    if (data.exp > now) {
        store.dispatch({
            type: type.LOGIN_SUCCES,
            payload: { 
              token,
              name: data.name
            },
        });
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

