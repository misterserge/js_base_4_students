type objType = {
    name: string, 
    age: number
}
const obj: objType = {name: 'John', age: 20};
const obj1: {name: string, age: number} = {name: 'John', age: 20};
const myobj: Object = {name: 'John', age: 20};
interface MyInterface {
    readonly name: string;
    age: number;
    // print(): void;
    [key: string]: string | number;
}
const myobj2: MyInterface = {name: 'John', age: 20, dsfsfd: 2};

myobj2.age = 20;

interface Person {
    name: string;
}

interface Person {
    age: number
}

const john: Person = {name: 'John', age: 20};

interface Account {
    login: string;
}

const myAcc: Account = {login: 'John'};

interface Admin extends Account, Person {
    role: string;
}

const admin: Admin = {login: 'John', name: 'John', age: 20, role: 'admin'};

type newType = Account & Person;