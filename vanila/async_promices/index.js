// const url = 'https://jsonplaceholder.typicode.com/photos';
const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url)
//     .then((response) => response.json())
//     .then(data => console.log(data))
    // .catch(error => console.error(error))
    // .finally(() => console.log('operation completed'))

async function getPosts(url) {
    try{
        const response = await fetch(url);
        // const posts = await response.json();
        // return posts;
        return await response.json()
    }catch (error){
        console.warn(error)
        return error
    }
}

// getPosts(url).then(console.log).catch(console.warn);
getPosts(url).then(console.log);

const getComments = async () => {
    
}

class Articles {
    async methodName() {

    }
}
const article1 = new Articles();
article1.methodName().then()