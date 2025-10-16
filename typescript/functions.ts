const fn1 = (num: number): string => {  
    return num.toString(); //String(num)
} 

type Callback = (num: number) => string;

function fn2(cb?: Callback) {
    cb === undefined ? 
    console.log('no callback') : 
    console.log(cb(10));
}

function createPoint(x: number, y: number): [number, number] {
    return [x, y];
}

const point = createPoint(10, 20);
console.log(point);

function fn3(...args: number[]): string {
    console.log(args);
    return args.join(',');
}

fn3(10, 20, 30);

function fn4(a: number, b: number, c: number) {
    console.log(a, b, c);
}

interface Printable {
   label: string;
}

function fn5(obj: Printable): void {
    console.log(obj.label);
}

const drink = {
    label: 'Coke',
    price: 90
}

fn5(drink);

function pickCard(x: number): {suit: string; card: number};
function pickCard(x: {suit: string; card: number}[]): number;
function pickCard(x): any {
    if (typeof x === 'number') {
        return {suit: 'hearts', card: x};
    } else if (Array.isArray(x)) {
        return x.length;
    }
};

