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
        quantity: 2,
    },
    {
        id: 4,
        name: 'Javascript book',
        price: 99,
        quantity: 0,
    },
]

// const result = numbers.forEach((num, index, arr) => (arr[index] = num ** 2));
// const result = numbers.map((el, index) => el **2);
// const result = basket.map((el) => ({name: el.name, price: el.price}));
// const result = basket.filter((el) => (el.price>500));
// const result = numbers.filter((el) => (el>4));
const result = basket.reduce((acc, item) => {
    if (item.quantity < 0) return acc;
    return acc + item.quantity * item.price
}, 0)
console.log(result);
console.log(basket);
// console.log(numbers);