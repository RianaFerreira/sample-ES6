var React = require('react');
// provides access to parent properties and dispatch method
var { connect }  = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var { todos, showCompleted, searchText } = this.props;

    var renderTodo = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (<p className="container__message">Nothing To Do</p>);
      }

      return filteredTodos.map((todo) => {
        return <Todo key={ todo.id } { ...todo }  />;
      });
    }

    return (
      <div>
        <h2 className="text-center">Todo List</h2>
        { renderTodo() }
      </div>
    );
  }
});


export default connect(
  // state needed, only return the state needed by child component
  (state) => {
    // sets props to contain all the items on the state tree
    return state;
  }
)(TodoList);
