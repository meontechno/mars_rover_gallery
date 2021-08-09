/* 
  index.js
  Author - Nithesh Singh (meontechno@gmail.com)
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import './assets/index.css';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers(), compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);
console.log(store.getState());


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

