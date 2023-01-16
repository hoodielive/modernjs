const log = console.log

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
  }
  this.events[type].forEach(function (fn) {
    fn(event)
  })
}

log(emitter.on('surpression', ()=> 'hello, world')
