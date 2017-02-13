function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greetMe = function() {
    console.log('Hello, I am ' + this.name + '.');
  }
}

var p1 = new Person('Pikachu', 20);
var p2 = new Person('Charizard', 20);

p1.greetMe();

console.log(p1.get);

// Major drawback:
// Methods are created once for each instance.
