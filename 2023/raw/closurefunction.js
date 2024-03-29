const log = console.log

function returnAFunction() {
    let count = 0;
    return function counter()
    {
        return log(count++)
    }
}

log(returnAFunction())

function makeFunctions() {
  let privateNum = 0;

  function privateIncrementer() {
    privateNum++;
  }

  return {
    logNum: () => log(privateNum),
    increment: () => {
      privateIncrementer();
      log('Incremented!');
    }
  }
}

// Yes but implement!
log(makeFunctions());
