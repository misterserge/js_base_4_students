//function declaration
function sayHello() {
    console.log('hello');
}
sayHello();

//function expression
const sayHello = function() {
    console.log('hello');
}
sayHello();

//named function expression
const sayHello = function sayHello() {
    console.log('hello');
}
sayHello();

//arrow function
const sayHello = (name) => {
    console.log('hello', name);
}
sayHello('John');

//arrow function with multiple arguments
const sayHello = (name, age) => {
    console.log('hello', name, age);
}
sayHello('John', 30);