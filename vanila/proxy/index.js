const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log("Hello, I'm " + this.name);
    }
}

const personProxy = new Proxy(person, {
    get(target, prop) {
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {   
            target[prop] = value;
            return true;
        } else {
            throw new Error(`Property ${prop} does not exist`);
        }
        ;
    },
    has(target, prop) {
        return ['age', 'name'].includes(prop);
    },
    deleteProperty(target, prop) {
        if (prop in target) {
            delete target[prop];
            return true;
        } else {
            throw new Error(`Property ${prop} does not exist`);
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => key !== 'age');
    },
    getOwnPropertyDescriptor(target, prop) {
        return {
            writable: true,
            configurable: true,
            value: target[prop]
        }
    }
})

personProxy.name = 'Jane';
console.log(personProxy.name);
personProxy.age = 20;
console.log(personProxy.age);
personProxy.greet();
personProxy.voice = 'meow';
console.log(personProxy.voice);