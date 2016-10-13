// Libraries
import React from 'react';
import * as Redux from 'react-redux';

// Components
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';

// Action generators
import * as actions from 'actions';

// createClass used for component that maintains state
export var TodoApp = React.createClass({
  onLogout(e) {
    var { dispatch } = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div className="row">
        <div className="page-actions">
          <a href="#" onClick={ this.onLogout }>Logout</a>
        </div>
        <h1 className='page-title'>Todo Application</h1>
        <div className="columns small-12 large-6 small-centered large-centered">
          <div className="container">
            <TodoSearch />
            <TodoList />
            <TodoForm />
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
