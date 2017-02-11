function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greetMe = function() {
    console.log('Hello, I am ' + this.name + '.');
  }
}

var p1 = new Person('Aayush', 20);
p1.greetMe();
