const obj1 = {
    a: 1,
    name: 'John',
}

const obj2 = {
    b: 2,
    name: 'Jane',
}

const obj3 = {
    ...obj1,
    ...obj2,
}
console.log(obj3)

console.log(sum(1,4,5,6,7))
const sum = (a, b, ...args) => {
    let result = a + b;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}