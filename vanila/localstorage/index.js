const number = 10;
console.log(localStorage.getItem('number'));
localStorage.setItem('number', number);
console.log(localStorage.getItem('number'));
localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.clear();
console.log(localStorage.getItem('number'));

const obj = {
    name: 'John',
    age: 30,
}

localStorage.setItem('userobj', JSON.stringify(obj));
const rawUser = localStorage.getItem('userobj');
const parsedUser = rawUser ? JSON.parse(rawUser) : null;
console.log('name', rawUser.name);
console.log(parsedUser);
console.log('name', parsedUser.name);
localStorage.clear();
console.log(localStorage.getItem('userobj'));