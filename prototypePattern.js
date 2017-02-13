function Person() {
}

Person.prototype = {
  name: "Lala",
  age: 50,
  greetMe: function() {
    console.log('Hello, I am ' + this.name + '.');
  }
};

var p1 = new Person();
p1.name = "Pikachu";
p1.age = 20;

p1.greetMe();
