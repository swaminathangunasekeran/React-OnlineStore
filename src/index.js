import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from "redux/reducer/"
import './index.css';


const hist = createBrowserHistory();
const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
);
