const valueFactory = (x: number) => x;
const myValue = valueFactory(10);

type TypeFactory = (x: number) => number;
type TypeFactory2<x> = x;
type MyTyp2e = TypeFactory2<number>;


interface ValueContainer<Type> {
    value: Type;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {value: 'Hello'};

class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['Hello', 'World']);
new ArrayOfAnything([1,2]);


function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<number>([1,2,3]);
printAnything<string>(['Hello', 'World']);
printAnything<boolean>([true, false]);

interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callbackfn: (
        state: U, element: T, index: number, 
        array: T[]) => U,
        firstState?: U
    ): U;
}

interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(arr: T): number {
    return arr.length;
}

printLength([1,2,3]);
printLength({a: 1, length: 10});
printLength('Hello');

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProperty({a: 1, b: 2}, 'a');
getProperty({a: 1, b: 2}, 'b');
getProperty({a: 1, b: 2}, 'c');

//fabric
function create<Type>(c: new () => Type): Type {
    return new c();
}
