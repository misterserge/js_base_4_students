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
    .then(console.log)
    .catch(console.error)
    .finally(() => {console.log('operation completed')})

const url = 'https://jsonplaceholder.typicode.com/photos';
fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))