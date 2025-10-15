import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// axios.get(url).then(res => {
//     // console.log(res.data);
//     // const {id, title, finished} = res.data as Todo;
//     const todo = res.data as Todo;
//     //console.log(todo);
//     const id = todo.id;
//     const title = todo.title;
//     const finished = todo.completed;
//     // console.log(id, title, finished);
//     logTodo(id, title, finished);
// })

axios.get<Todo>(url).then(({ data }) => {
    const { id, title, completed: finished } = data;
    logTodo(id, title, finished);
})

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(id, title, finished);
}