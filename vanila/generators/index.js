function* generator() {
    yield "hello";
    yield 'world';
    yield '!!!';
}

const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen instanceof GeneratorFunction);
console.log(gen);

// const iterator = {
//     gen(n = 5) {
//         let count = 0;
//         return {
//             next() {
//                 if (count < n) {
//                     count++;
//                     return {value: count, done: false};
//                 } else {
//                     return {value: undefined, done: true};
//                 }
//             }
//         }
//     }
// }

// const iter = iterator.gen();
// console.log(iter.next());
// console.log(iter.next());

const iterator = {
    [Symbol.iterator](n = 5) {
        let count = 0;
        return {
            next() {
                if (count < n) {
                    count++;
                    return {value: count, done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

for (let k of iterator) {
    console.log(k);
}
// for (let k of "hello") {
//     console.log(k);
// }

//symbol
const sym = Symbol();
const obj = {
    [sym]: 'hello'
}

console.log(obj[sym]);

const sym2 = Symbol('hello');
console.log(sym2);