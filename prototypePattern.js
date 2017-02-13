function Person() {
}

Person.prototype = {
  name: "Lala",
  age: 50,
  friends: ["Man", "Dan"],
  greetMe: function() {
    console.log('Hello, I am ' + this.name + '.');
  }
};

var p1 = new Person();
p1.name = "Pikachu";
p1.age = 20;
p1.greetMe();

/*
var p2 = new Person();
p2.friends.push("Vans");

console.log(p1.friends);
*/

// Major drawback:
// Both functions and properties are shared for all instances.
