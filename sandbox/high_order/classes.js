// class is a function that creates a re-usable object
class Person {
  // class constructor
  constructor (name = 'Anon', age = 30) {
    // this refers to the individual instance of a class
    this.name = name;
    this.age = age;
  }

  // class method
  getGreeting () {
    // template strings
    return `Hi! I'm ${this.name}.`;
  }

  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`;
  }

  // overriding built in methods
  toString () {
    // return this.getGreeting();
    return JSON.stringify(this);
  }
}

// create instance of class
var me = new Person('Mojo', 37);
var personDefault = new Person();

console.log(me.getGreeting());
console.log(me.getDescription());

console.log(personDefault.getGreeting());
console.log(personDefault.getDescription());


console.log({age: 25}.toString());
console.log(me.toString());

// extend the Person class
class Child extends Person {
  constructor (name, age, like) {
    // set the parent's constructor function with the values that need to be initialized
    // this will not be created is super is not called
    super(name, age);
    this.like = like;
  }

  getGreeting () {
    return `Hiiiii! My name is ${this.name} and I like ${this.like}.`;
  }
}

var anonymous = new Child('Fuzzy', 10, 'Motorbikes');
console.log(anonymous.getDescription());
console.log(anonymous.getGreeting());

class Baby extends Person {
  getGreeting () {
    return 'wwhhhhaaaaa';
  }
}

var babe = new Baby();
console.log(babe.getGreeting());
