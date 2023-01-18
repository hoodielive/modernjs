const log = console.log
const url = 'https://jsonplaceholder.typicode.com/todos/1'

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")

   log('Initiating Promise.')
   setTimeout(() => (true) ? resolve("done") : reject('failed'), 9000);
}).then(
    result => log('Passed, test.'),
    error => log('Failed test.')
);
