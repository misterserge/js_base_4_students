const numbers = [1, 2, 3, 4, 5, 6, 7];
const langs = ['HTML', 'CSS', 'Javascript', 'Javascript', 'PHP'];
const basket = [
    {
        id: 1,
        name: 'JS book',
        price: 900,
        quantity: 1,
    },
    {
        id: 2,
        name: 'CSS book',
        price: 1200,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Javascript book',
        price: 700,
        quantity: 1,
    },
    {
        id: 4,
        name: 'Javascript book',
        price: 99,
        quantity: 1,
    },
]

// const result = numbers.indexOf(3);
// const result = numbers.includes(3);
// const result = langs.includes('Javascript');
// const result = basket.find((el) => el.id === 2);
const result = basket.findIndex((el) => el.id === 2);
console.log(result);