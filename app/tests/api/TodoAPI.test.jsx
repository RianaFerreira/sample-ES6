var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', () => {
  //   beforeEach(() => {
  //     localStorage.removeItem('todos');
  //   });
  //
  //   it('should set valid todos array', () => {
  //     var todos = [{
  //       id: 23,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //
  //     TodoAPI.setTodos(todos);
  //
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  //
  //   it('should not set invalid todos array', () => {
  //     var todos = {a: 'b'};
  //
  //     TodoAPI.setTodos(todos);
  //
  //     expect(localStorage.getItem('todos')).toBe(null);
  //   });
  // });

  // describe('getTodos', () => {
  //   it('should return empty array for bad localStorage data', () => {
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual([]);
  //   });
  //
  //   it('should return todo if valid array in localStorage', () => {
  //     var todos = [{
  //       id: 23,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //
  //     var actualTodos = TodoAPI.getTodos();
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  // });

  describe('filterTodos', () => {
    var todos = [
      {id: 1, text: 'Eat lunch', completed: true},
      {id: 2, text: 'Drink tea', completed: false},
      {id: 3, text: 'Drink water', completed: true}
    ];

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return only incomplete todos if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should order todos and list incomplete items first', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'eat');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if search text is not given', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
