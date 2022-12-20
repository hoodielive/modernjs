let log = console.log

let foo;
log('is undefined?', foo === undefined);

foo = { a: 'a' }
log('is undefined?', foo.b === undefined);

function fooFunc() { return; }
log('is undefined?', fooFunc() === undefined);

function foo2(param)
{
  log('is undefined? Does log work?', param === undefined);
}

foo2('a');
