// Generators

const log = console.dir

function *numbers() {
  log('begin')
  
  yield 1;
  yield 2;
  yield 3;
  
}

let iterator = numbers();

// log(numbers().next());
// log(numbers().next().value);


function *range(start, end) 
{
  while (start <= end)
  {
    yield start;


    start++;
  }
}

//!Important could do 
// let iterator = range(1, 5) log(iterator.next());
// or
// for (let i of iterator) log(i)

log(
  [...range(1, 5)]
)
