import firebase from 'firebase';

// Initialize (authenticate) Firebase DB
var config = {
  apiKey: "AIzaSyARnm279I_T8TFfaIhDshf-DPI64pQCu4g",
  authDomain: "react-redux-todo-c30af.firebaseapp.com",
  databaseURL: "https://react-redux-todo-c30af.firebaseio.com",
  storageBucket: "react-redux-todo-c30af.appspot.com",
  messagingSenderId: "1060477495480"
};
firebase.initializeApp(config);

// get reference to DB and add app name property
// set method resets data at the current reference
// firebase.database().ref().set({
//   appName: 'Todo App',
//   isRunning: true,
//   user: {
//     name: 'Mojo',
//     age: 37
//   }
// });

// create reference to the DB ref
var firebaseRef = firebase.database().ref();

// ***************  SET DATA - overwrites all exist data  ********************* //
// set method wipes all existing data and replaces it with the values passed in
// returns a promise when the data is saved to the DB
firebaseRef.set({
  isRunning: true,
  user: {
    name: 'Mojo',
    age: 37
  },
  app: {
    name: 'Todo App',
    version: '1.0'
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed', e);
});

// only update the value on the 'user' child attribute
// wipes all data and updates the name attribute value
// firebaseRef.child('user').set({ name: 'fuzzy' });

// only update the value on the 'app' child attribute
// wipes all data and updates the name attribute value
// firebaseRef.child('app').set({ name: 'React Redux Todo Application' });

// *************** UPDATE DATA - only updates specified data ****************** //
// only updates the first level of object properties
//   multi-path updates, key-value pairs added inside of update
//   directly reference child and update
// returns a promise with the update value
// firebaseRef.update({
//   isRunning: false,
//   // multi-path update example
//   'app/name': 'TODO Application',
//   'user/name': 'User Name'
// });
//
// // Direct child ref update
// firebaseRef.child('app').update({
//   name: 'A ToDo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed', e);
// });
// firebaseRef.child('user').update({ name: 'Name'});

// *************** REMOVE DATA - only updates specified data ****************** //
// returns a promise once data is removed from DB
// truncates all data from the DB
// firebaseRef.remove();

// remove top level property
// firebaseRef.update({ isRunning: null });

// remove nested properties
// firebaseRef.child('app').remove();
// firebaseRef.child('app/name').remove();

// Alternatively set a property value to NULL - removes property and value
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// *************** FETCH DATA - root or subset of data ************************ //
// returns a snapshot of the requested data and a promise
// ONCE listener can't be removed
// Fetch the root of the database
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// })

// Fetch a subset of the database
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got subset of database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Failed to fetch value', e);
// });

// *************** LISTEN FOR CHANGES TO DATA ********************************* //
// ON can be called for a root or any child reference
// ON listener can be removed
// fires multiple times so a promise can't be used, instead attach a callback function
// callback includes the snapshot as an argument
// callback is called once when listener is attached and every time the data changes
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
// firebaseRef.update({ isRunning: false });

// remove a specific listener
// firebaseRef.off(logData);

// remove all listeners
// firebaseRef.off();

// *************** WORKING WITH ARRAYS IN FIREBASE **************************** //
// Firebase doesn't use arrays like JS instead it uses objects
// An id is auto generated for each key value pair
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child added with key / value pair: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed with key / value pair: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child removed with key / value pair: ', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push();
// newNoteRef.set({ text: 'Drink coffee'});

// Alternatively chain calls
// var newNoteRef = notesRef.push({ text: 'Drink more coffee' });


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added: ', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot) => {
  console.log('child added: ', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot) => {
  console.log('child removed: ', snapshot.key, snapshot.val());
});
todosRef.push({ text: 'Make cold brew' });
todosRef.push({ text: 'Drink cold brew' });
