class Animal {

    static type = 'ANIMAL';

    constructor({name, age}) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, I'm " + this.name);
    }
}

const animal = new Animal({name: 'Rex', age: 5});
animal.greet();

class Cat extends Animal {

    static type = 'CAT';
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    greet() {
        super.greet();
        console.log("my color is " + this.color);
    }
    get voice() {
        return 'meow';
    }
    set voice(voice) {
        this.voice = console.log("my color is " + this.color);
    }
}

const cat = new Cat({name: 'Whiskers', age: 3, color: "black"});
cat.greet();