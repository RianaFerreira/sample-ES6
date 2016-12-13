var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export class TodoForm extends React.Component {
  handleSubmit (event) {
    event.preventDefault();

    var { dispatch } = this.props;
    var todoText = this.refs.todoInput.value;

    if (todoText && todoText.length > 0) {
      this.refs.todoInput.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoInput.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" ref="todoInput" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(TodoForm);
