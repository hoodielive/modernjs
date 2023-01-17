const log = console.log

let number = '3'
number = Number(number)
let coerce_number = parseInt(number)

log(typeof(coerce_number))
log(typeof(number))

let coerce_string = String(coerce_number);
log(typeof(coerce_string))

function fruitProcessor(apples, oranges, mangoes=2)
{
    log(apples, oranges);
    const juice =  `juice with ${apples} apples and ${oranges} oranges and ${mangoes} mangoes.`
    return juice
}

const applejuice = fruitProcessor(5, 0, 0);
log(applejuice)

let expertise = 'journalism'
let person = {
    username: 'Osa', 
    age: 27,
    [expertise]: {
        years: 5, 
        interests: ['international', 'politics', 'internet']
    }
}

log(person)
let abilities = 'awo'

let prophecy = {
    username: 'ifasogo',
    [abilities]: {
        years: 6,
        interests: ['conjure', 'ebo', 'akose']
    }
}

log(prophecy)

let listeners = []
function listen() {}
events = { listeners, listen }

let store = {}
let storage = { getItem, setItem, clear }

function getItem(key) {
    return key in store ? store[key] : null 
}

function setItem(key, value) {
    store[key] = value
}

function clear() {
    store = {}
}

let emitter = {
    events: {},
    on: function(type, fn) {
        if (this.events[type] === undefined) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    },
    emit: function (type, event) {
        if (this.events[type] === undefined) {
            return
        }
        this.events[type].forEach(function(fn) {
            fn(event)
        })
    }
}