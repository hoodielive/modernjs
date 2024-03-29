const log = console.log
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

// add fulfillment and rejection handler
promise.then(
    response => {
        // fulfillment
        log(response.status)
    }, 
    reason => 
    {
        // rejection
        console.error(reason.message)
    }
);

promise.then(response => {
    console.log(response.statusText)
})

promise.then(null, reason => {
    // rejection
    console.error(reason.message)
})