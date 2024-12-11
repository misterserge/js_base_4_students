const sum = (a, b) => { return a + b };

const sum2 = (a = 0, b = 0) => a + b;

const result = sum(4, 5);

const square = number => number*2

const printHello = () => console.log('hello')

const numbers = [1, 8, 3, 44, 9, 151, 18, 4];
numbers.sort((a, b) => a - b);

const person = {
    name: 'Jonh Doe',
    age: 44,
    languages: ['MHTL', 'CSS', 'Javascript'],
    greet() {
        console.log(this.name)
        this.languages.forEach(() => console.log(this)
        )
    }
}