let log = console.log

function exampleoo(a, b, c)
{
    if (a > b && a > c)
     log("a is bigger")
    else if (b > a && b > c)
    log("b is bigger")
    else
    log('c is bigger')
}

log(exampleoo(10, 7, 3))
