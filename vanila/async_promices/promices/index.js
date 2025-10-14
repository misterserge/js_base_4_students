const promise1 = new Promise((resolve, reject) => {
    setTimeout (()=> {
        resolve('foo');
    },0);
});

promise1.then(() => {});
promise1.catch(() => {});
//console.log(promise1);
// expected output: [object Promise]


function akaFetch() {
    return new Promise((resolve, rejected) => {
        setTimeout (() => {
            resolve('hello from promise');
        }, 2000 );
    }) 
};
akaFetch()
    .then((response) => {
        console.log(response);
        return response + '!';
    })
    .then(console.log)//.then((value) => console.log(value))
    .catch(console.error)
    .finally(() => {console.log('operation completed')})

Promise.resolve(5)
  .then(console.log)       // выведет 5
  .then((x) => x + 1)      // x = undefined, потому что console.log вернул undefined
  .then(console.log)       // выведет undefined

Promise.resolve(5)
  .then((x) => { console.log(x); return x; }) // вернули x
  .then((x) => x + 1)
  .then(console.log)                          // выведет 6


const url = 'https://jsonplaceholder.typicode.com/photos';
fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('operation completed'))