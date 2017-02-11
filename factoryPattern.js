function createPerson(name, age) {
  var o = new Object();
  o.name = name;
  o.age = age;

  o.greetMe = function() {
    console.log('Hello, I am ' + o.name + '.');
  }

  return o;
}

var p1 = createPerson("Aayush", 20);
p1.greetMe();
