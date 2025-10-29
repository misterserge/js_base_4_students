// function createFn() {
//     const message = 'hello';
//     function greeting(str) {
//         console.log(message, str);
//     }
//     return greeting;
// }

// const helloWorld = createFn();
// // console.log(typeof(helloWorld));
// helloWorld('world');
const x = 5;
function addByX() {
    return function(num) {
        return num + x;
    } 
}
// const addByFive = addByX()
// console.log(addByFive(2));

// const addByTwo = addByX()
// console.log(addByTwo(2));

function once(fn) {
    let hasBeenCalled = false;
    let cachedResult;

    return (...args) => {
        console.log('cachedResult', cachedResult)
        console.log('hasBeenCalled', hasBeenCalled)
        if (hasBeenCalled) return cachedResult;
        
        hasBeenCalled = true;
        cachedResult = fn(...args);
        console.log('cachedResult', cachedResult)
        return cachedResult;
    }
}

const addByTwoOnce = once(num => num + 2);

console.log(addByTwoOnce(2))
console.log(addByTwoOnce(5))
console.log(addByTwoOnce(7))

for (var i = 0; i < 3; i++) {
    return function(x) {
        return x;
    }(i);
}