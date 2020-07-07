import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {fromJS} from 'immutable';
import {rootSaga} from './Sagas/Saga';
import rootReducer  from './Components/Redux/RootReducer';
const sagaMiddleware =  createSagaMiddleware();

const store = createStore(rootReducer,
				fromJS({}),
				composeWithDevTools(
  				applyMiddleware(sagaMiddleware)));
	

sagaMiddleware.run(rootSaga);

ReactDOM.render( ( <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();