
console.log(sum(1,4,5,6,7))
const sum = (a, b, ...args) => {
    let result = a + b;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}