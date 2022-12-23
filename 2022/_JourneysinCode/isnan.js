let log = console.log;

log(isNaN(true))
log(isNaN(false))
log(isNaN(-2e-4))
log(isNaN(Infinity))
log(isNaN(-Infinity))
log(isNaN(""))
log(isNaN(" "))
log(isNaN("45.3"))
log(isNaN("1.2e3"))
log(isNaN("Infinity"))
log(isNaN(new Date))
log(isNaN("10$"))
log(isNaN(undefined))
log(isNaN())
log(isNaN(function(){}))
log(isNaN({}))
log(isNaN[1, 2])
log(typeof null === 'object')
log(typeof undefined === 'undefined')