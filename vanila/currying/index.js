//currying
function createIncrement(n) {
    return function(num) {
        return num + n;
    }
}

const incrementByTwo = createIncrement(2);
console.log(incrementByTwo(5));
console.log(createIncrement(45)(10));
