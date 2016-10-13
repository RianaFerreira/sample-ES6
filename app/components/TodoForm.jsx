var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var TodoForm = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    var { dispatch } = this.props;
    var todoText = this.refs.todoInput.value;

    if (todoText && todoText.length > 0) {
      this.refs.todoInput.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoInput.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref="todoInput" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(TodoForm);
