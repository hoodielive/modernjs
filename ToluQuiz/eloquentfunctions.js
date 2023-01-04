const log = console.log

const square = function(x)
{
    return x * x;
}

let x = square(5)

if (x != 14)
{
    console.log("Um... no!");
}
else if (x == '5') {
    // This will never run.
    console.log(x);
}

const makeNoise = function()
{
    log("Pling!");
}

makeNoise();

const power = function(base, exponent)
{
    let result = 1;
    for (let count = 0; count < exponent; count++)
    {
        result *= base;
    }
    return result;
};

log(power(9, 8));