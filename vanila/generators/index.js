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