import axios from 'axios';

const log = console.log
const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    const todo = response.data;
    log(todo);
});