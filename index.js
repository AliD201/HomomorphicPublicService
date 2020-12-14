import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './loading.min.css'
import './transition.min.css'
import App from './App';
import Editor from './Editor';

import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <div className="header  ">
        <a href="/">
      <h1 className="tl   ">
      Public Homomorphic service
      </h1>
      </a>
      </div>
    <Router>
      <Switch>
        <Route path="/:id" exact  component={Editor} />
        <Route path="/"  component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
