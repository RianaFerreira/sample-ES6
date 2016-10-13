var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');

// ES6 destructuring syntax
// hashHistory is stored on the client
var { hashHistory } = require('react-router');

// Auto require all application child components
// Ref webpack configuration resolve['modulesDirectories']
var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

// import './../sandbox/firebase/index';

// Store data in the localStorage replace this with the Firebase JSON store instead
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state ', state);
//   TodoAPI.setTodos(state.todos);
// });
// Initialize app data from localStorage replace this with DB data instead
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    // user is logged in redirect them to the todos page
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    // redirect logged out user back to login page
    hashHistory.push('/');
  }
});

// Load foundation with the css-loader installed
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
  document.getElementById('app')
);
