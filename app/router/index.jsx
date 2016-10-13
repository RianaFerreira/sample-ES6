import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import ComponentOne from 'ComponentOne';
import ComponentTwo from 'ComponentTwo';

import firebase from 'app/firebase/';

// Middleware for the required logged in routes
var requireLogin = (nextState, replace, next) => {
  // check if the user is logged in
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

// Middleware to automatically redirect a logged in user without displaying the login page
var redirectLoggedIn = (nextState, replace, next) => {
  // check if the user is logged in
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={ hashHistory }>
    <Route path="/">
      <Route path="todos" component={ TodoApp } onEnter={ requireLogin }/>
      <IndexRoute component={ Login } onEnter={ redirectLoggedIn } />
      <Route path="component-one" component={ ComponentOne } />
      <Route path="component-two" component={ ComponentTwo } />
    </Route>
  </Router>
);
