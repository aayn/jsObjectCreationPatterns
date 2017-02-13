function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  constructor: Person,
  greetMe: function() {
    console.log('Hello, I am ' + this.name + '.');
  }
};

var p1 = new Person("Pikachu", 20);
p1.greetMe();

console.log(typeof p1);

//Best of both worlds
