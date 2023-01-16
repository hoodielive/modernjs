import  axios  from 'axios';

const log = console.log
const url = 'https://jsonplaceholder.typicode.com/todos/1'


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Receive a promise (async)
axios.get(url) .then(response => {
 
  // Response.data has properties of:
  // id
  // title
  // completed
  
  const todo = response.data as Todo;
  
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});


const logTodo = (id: number, title: string, completed: boolean) => {
  log(`
      The todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
     `)
};
