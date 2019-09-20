import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import './index.css';


const hist = createBrowserHistory();


ReactDOM.render(
  <App/>,

 
 document.getElementById('root')
);
