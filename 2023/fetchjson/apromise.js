const log = console.log
const promise = fetch('books.json')

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