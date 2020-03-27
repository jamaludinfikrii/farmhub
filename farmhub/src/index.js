import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import Reducers from './redux/reducers'


const myStore = createStore(Reducers)


import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
