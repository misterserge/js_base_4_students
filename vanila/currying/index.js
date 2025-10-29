//currying
function createIncrement(n) {
    return function(num) {
        return num + n;
    }
}

const incrementByTwo = createIncrement(2);
console.log(incrementByTwo(5));
console.log(createIncrement(45)(10));

//via bind
function createCurry(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        }
    }
}

const add = createCurry.bind(null, (a, b) => a + b);
console.log(add(1, 2));