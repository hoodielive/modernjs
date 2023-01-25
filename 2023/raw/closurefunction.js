const log = console.log

function returnAFunction() {
    let count = 0;
    return function counter()
    {
        return log(count++)
    }
}

log(returnAFunction())