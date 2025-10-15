let obj = {
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
console.log('=====map=======')
const map = new Map(entries);
console.log(map);
console.log(map.get('name'));
map.set(obj, 'hello');
console.log(map.get(obj));
console.log(map);
console.log(map.delete(obj));
console.log(map.has(obj));
console.log(map.size);

for (const [key, value] of map) {
    console.log(key, value);
}
//the same!
for (const [key, value] of map.entries()) {
    console.log(key, value);
}
for (const key of map.keys()) {
    console.log(key);
}
for (const value of map.values()) {
    console.log(value);
}

console.log('=======set=======')
const set = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(set);
set.add(obj);
console.log(set.has(obj));
console.log(set.size);
for (const value of set) {
    console.log(value);
}
for (const value of set.entries()) {
    console.log(value);
}

console.log('=======weakMap=======')
const weakMap = new WeakMap([[obj, 'data']]);
console.log(weakMap);

console.log(weakMap.get(obj))
obj = null;
console.log(weakMap);

const cache = new WeakMap();
 function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}
const user = { name: 'John' };
cacheUser(user);
console.log(cache.has(user));
cuser = cache.get(user)
console.log(cuser);

console.log('=====weakset=======')

const weakSet = new WeakSet();
weakSet.add([1]);
console.log(weakSet);