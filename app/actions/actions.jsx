import firebase, { firebaseRef, githubProvider } from 'app/firebase/index';
import moment from 'moment';

// ACTIONS ARE SIMPLE FUNCTIONS THAT RETURN PLAIN OLD JS ACTION OBJECTS
export var setSearchText = (searchText) => {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export var addTodo = (todo) => {
  return { type: 'ADD_TODO', todo };
};

// Redux Thunk allows the action generator to retun a function instead
// of an action object. This enables the use of asynchronous DB requests.
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    // re-render the component with todo data from the DB
    return todoRef.then(() => {
        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
    });
  };
};

export var toggleShowCompleted = () => {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export var addTodos = (todos) => {
  return { type: 'ADD_TODOS', todos };
};

export var startAddTodos = () => {
  // thunk function returned for asynchronous DB request
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);

    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      // redux expects the todos to be an array
      var parsedTodos = [];

      // convert the todos object into a formatted array
      // take an object and returns an array
      Object.keys(todos).forEach((todoId) => {
        // set the id and merge in the remaining properties for the object with the todoId
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      // Update the Redux store
      dispatch(addTodos(parsedTodos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    // var todoRef = firebaseRef.child('todos/' + id);
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
}

export var startLogin = (uid) => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var logout = () => {
  return { type: 'LOGOUT' };
}

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out!');
    });
  };
};
