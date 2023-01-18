const log = console.log

const url = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    result => log(url),
    reject => log('This is the next thing.')
)


