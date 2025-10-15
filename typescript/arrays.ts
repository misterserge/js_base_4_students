//lists
const arr: string[] = [];
const arr1: Array<string> = ['214123', 'dsfsdf'];

const arr2: string[][] = [];
arr2.push(['1', '2', '3']);

type MyType = (number | string)[];
const arr3: MyType = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//tuples
const typle1: [number, string] = [1, '2'];
//csv
type sampleCsv = [number, string, boolean];
const sampleCsv1: sampleCsv = [1, '2', true];
