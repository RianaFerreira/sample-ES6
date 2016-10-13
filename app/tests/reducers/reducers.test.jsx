var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      // action to dispatch
      var action = { type: 'SET_SEARCH_TEXT', searchText: 'Coffee'};
      // pass action to reducer that sets the new state
      var res = reducers.searchTextReducer(df(''), df(action));
      // assert that the new state was set
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = { type: 'TOGGLE_SHOW_COMPLETED' };
      // deep freeze causes the tests to fail immediately if the state or action changes
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Drink Coffee',
          completed: false,
          completedAt: 92384275
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: 1,
        text: 'Eat Dinner',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = { type: 'UPDATE_TODO', id: todos[0].id, updates };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{id: 1, text: 'Drink Coffee', completed: false, completedAt: undefined, createdAt: 33000}];
      var action = { type: 'ADD_TODOS', todos };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should wipe existing todos on logout', () => {
      var todos = [{id: 1, text: 'Drink Coffee', completed: false, completedAt: undefined, createdAt: 33000}];
      var action = { type: 'LOGOUT' };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(0);
    });
  });

  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const action = { type: 'LOGIN', uid: '123abc' };
      // df references deep freeze as the value shouldn't change
      const res = reducers.authReducer(undefined, df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should not store uid on LOGOUT', () => {
      const authData = { uid: '123abc' };
      const action = { type: 'LOGOUT' };
      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  })
});
