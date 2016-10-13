var obj = {
  name: 'Bubbles',
  printName: function () {
    console.log(`My name is ${this.name}`);
  }
}

obj.printName();

// the context of this is lost when the method is called after the timeout
setTimeout(obj.printName, 1000);

// bind the instance of this to the timeout method
setTimeout(obj.printName.bind({ name: 'Blossom '}), 1000);
