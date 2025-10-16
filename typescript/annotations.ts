
let age: number;
age = 12;
console.log(age);

let username: string;
username = 'John';
console.log(username);

let isStudent: boolean;
isStudent = true;
console.log(isStudent);

// isStudent = 'dsfsdf'; //error here

type mytype = number | string;
let myscore: mytype = 10;
myscore = 10;
myscore = '10';
console.log(myscore);

let myscore2: number | string; //union types
myscore = 10;
myscore = '10';
console.log(myscore2);

let myarray: (number | string)[];
myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(myarray);

let myobject: {name: string, age: number};