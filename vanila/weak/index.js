const obj = {
    name: 'John',
    age: 30,
}

console.log(Object.entries(obj));
// const entries = [
//     ['name', 'John'],
//     ['age', 30],
// ]
console.log(Object.keys(obj));
console.log(Object.values(obj));

const entries = [
    ['name', 'John'],
    ['age', 30],
]
console.log(Object.fromEntries(entries));
// const obj = {
//     name: 'John',
//     age: 30,
// }

const weakMap = new WeakMap();
weakMap.set(obj, 'hello');
console.log(weakMap.get(obj));

const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj));