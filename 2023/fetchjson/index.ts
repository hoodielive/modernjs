
import  axios  from 'axios';

const log = console.log
const url = 'https://jsonplaceholder.typicode.com/todos/1'


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Receive a promise (async)
axios.get(url).then(response => {
 
  // Response.data has properties of:
  // id
  // title
  // completed
  
  const todo = response.data as Todo;
  
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;


  log(`
      The todo with ID: ${ID}
      Has a title of: ${title}
      Is it finished? ${finished}
     `)
});

