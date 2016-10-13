// localStorage used to store todo data
var $ = require('jQuery');

module.exports = {
  // setTodos: function (todos) {
  //   if($.isArray(todos)) {
  //     // localStorage takes a key value pair as args
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     return todos;
  //   }
  // },
  // getTodos: function () {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //
  //   try {
  //     todos = JSON.parse(stringTodos);
  //   } catch (error) {
  //     // if JSON.parse fails
  //   }
  //
  //   return $.isArray(todos) ? todos : [];
  // },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    // filter takes a callback function that is invoked for each item in given array
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by search text
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Filter by todo completed status
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        // display a before b
        return -1;
      } else if (a.completed && !b.completed) {
        // display b before a
        return 1;
      } else {
        // no change required
        return 0;
      }
    });

    return filteredTodos;
  }
};
