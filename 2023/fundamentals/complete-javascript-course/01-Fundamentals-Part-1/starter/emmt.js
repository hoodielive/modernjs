function getEnvelope(type, description) {
    return {
        data: {},
        [type]: description
    }
}

let emitter = {
    events: {},
    on(type, fn) {
        if (this.events[type] === undefined) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    },
    emit(type, event) {
        if (this.events[type] === undefined) {
            return
        }
        this.events[type].forEach(function(fn) {
            fn(event)
        })
    }
}

fetch('/items').then(response => {
    // do something.
})

const p = fetch('/items')
    p.then(res => {
        // handle response
    })
    p.catch(err => {
        // handle error
    })