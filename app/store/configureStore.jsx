// var redux = require('redux');
// replace require calls with import calls
// * grabs all the properties and adds them to the redux object as redux doesn't have a default import
import * as redux from 'redux';
// thunk is the default
import thunk from 'redux-thunk';

// var { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');
import { searchTextReducer, showCompletedReducer, todosReducer, authReducer } from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  // add middleware to the store using the thunk library object
  // redux.compose composes all the apps middleware
  // thunk allows action generators to return functions instead of plain old JS action objects
  // this allows the use of asynchronous DB requests, while code continues to execute
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
