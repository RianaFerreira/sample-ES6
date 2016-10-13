// ES6 spread operator examples

function add (a, b) {
  return a + b;
}
console.log(add(2, 3));
// output: 5

var toAdd = [9, 5];
console.log(add(...toAdd));
// output: 14

var groupA = ['Mojo', 'Fuzzy', 'Johnny'];
var groupB = ['Bubbles', 'Blossom', 'Buttercup'];
var finalArray = [3, ...groupA, groupB];
console.log(finalArray);
// output: [3, 'Mojo', 'Fuzzy', 'Johnny', ['Bubbles', 'Blossom', 'Buttercup']]

// Challenge 1
var person = ['Fuzzy', 16];
var person2 = ['Mojo', 20];

var greeter = function (name, age) {
  console.log('Hi ' + name + ', you are ' + age + '.');
}
greeter(...person);
greeter(...person2);

// Challenge 2
var names = ['Daniel', 'Dylan', 'Nates'];
var final = ['Ri', ...names];

final.map((name) => { console.log('Hi ' + name);})

