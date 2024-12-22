const url = 'https://jsonplaceholder.typicode.com/photos';
// fetch(url)
//     .then((response) => response.json())
//     .then(data => console.log(data))

async function getPosts(url) {
    try{
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
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