const numbers = [1, [2, 4], 3, 4, 5];
const [
    first = 0, 
    [deepFirst = 0, deepSecond = 0] = [], 
    ...tail
] = numbers || [];

const x = 10;
const y = 20;
[x, y] = [y, x];