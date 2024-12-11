let count = 0;

function recurse(){
    if (count == 5) return 'done';

    count ++;
    return recurse();
}

// console.log(recurse());
const recurseRes = recurse();
console.log(recurseRes)
// console.log('count', count)
// Math.pow(5, 3);
function pow(x, y) {
    if (y === 0) return 1;

    return x * pow(x, y - 1);
}