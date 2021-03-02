import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup'
import Dashboard from './dashboard'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page2" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
      </BrowserRouter>,
      rootElement


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
