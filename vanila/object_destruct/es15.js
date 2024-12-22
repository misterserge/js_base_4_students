const myObj = {
    a: 1,
    b: 2,
    c: {
        a: 0,
        b: 10,
    },
    d: 4,
    e: 5,
    n: [1, 2, 4],
};

const {
    d: myname = 0,
    a: firstA = 0,
    c: myC = { a: secondA = 0, } = {},
    n: [ , deepB = 0 ] = [],
    ...tail
} = myObj || {};

let a, b;
({a, b} = myObj);

function fn1([a], {b, c}){
    console.log(a, c)
}