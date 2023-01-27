
let person = {
    firstName: 'Jon',
    lastName: 'Doe'
}

function getPerson() {}

let {firstName, lastName} = person;

const log = console.log

log(firstName, lastName);

let { first, last } = getPerson() || {}

log(first, last)