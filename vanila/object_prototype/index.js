const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
console.log(person.toString())
console.log(person.valueOf())
console.log(person.hasOwnProperty('name'))
console.log(person.__proto__)
// person.greet.prototype.sound = function() {
//   console.log("wow!!!");
// }
// console.log(person.sound());


Object.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
}

console.log(person.sayHello());

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const user = new User('Serge');

user.sayHi();

const person2 = new Object({
    name: "John",
    age: 30,
    greet() {
      console.log("Hello, I'm " + this.name);
    },
  });

console.log(person2.name);
console.log(person2.age);
console.log(person2.greet());
console.log(person2.toString())
console.log(person2.valueOf())
console.log(person2.hasOwnProperty('name'))
console.log(person2.__proto__)

Object.prototype.greet2 = function() {
  console.log("Hello, I'm " + this.name + " and I'm " + this.age + " years old");
}

console.log(person2.greet2());
console.log(person2.__proto__)

const newPerson = Object.create(person2);
newPerson.name = 'Jane';
console.log(newPerson.name);
console.log(newPerson.age);
console.log(newPerson.greet());
console.log(newPerson.toString())
console.log(newPerson.valueOf())
console.log(newPerson.hasOwnProperty('name'))
console.log(newPerson.__proto__)
console.log('====================')
console.log(newPerson.__proto__.__proto__)

const str = new String('Hello');
console.log(str);
console.log(str.__proto__.__proto__);
  