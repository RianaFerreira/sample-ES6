// use the installed npm module 'nodemon' to auto reload CLI output as the script
// run $ nodemon sandbox/higher-order-functions.js

// Higher order component stems from the concept of higher order functions
// Higher order component is a function takes a component and returns a higher order component
// 1) arguments keyword available inside of functions not arrow functions
// 2) apply method available on all functions, use to call functions
function one (name, location) {
  console.log(name, location);
}

function two () {
  console.log('Args', arguments);
  // apply takes two args, the this keyword you want to call it with and an array of args
  one.apply(undefined, ['Buttercup', 'Sydney']);
}

two('Fuzzy', 'Melbourne');

// Higer order function properties:
// 1) it is a function
// 2) it takes a function as it's one and only arg
// 3) it returns a function
var add = (a, b) => a + b;
var square = (c) => c * c;

// higher order function examples
var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('Result is ' + res);
    return res;
  }
}

console.log(add(1, 2));
var addAndLog = callAndLog(add);
console.log(addAndLog(10, 20));

console.log(square(2));
var squareAndLog = callAndLog(square);
console.log(squareAndLog(10));
