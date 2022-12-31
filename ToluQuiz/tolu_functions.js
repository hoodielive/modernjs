const log = console.log

/** Function declaration
 * ! Declaring a function() 
 * ? The following is an example of a function declaration.
 * */ 

function makeEbo()
{
    return "Its good to make ebos."; }

log(makeEbo());

// Function Expression (anonymous function)
const makePsyExpressions = function()
{
    return "Psychical development is possible.";
}

log(makePsyExpressions());

// Function Expression (named function) 
const makeAnointing = function Ase() 
{ 
    return "Ase ooo!" 
} ;

log(makeAnointing());

const makeOgun = () => "Ogun Onire is the Remover of Obstacles.";
log(makeOgun());

const makeOsu = named => `${named} is a monitor.`;
log(makeOsu('Osu'));

const makeEsu = (a, b) => `${a} is a ${b}.`;
log(makeEsu('Esu', 'Onibode'));

// Default arguments
function Orunmila(eleri="ipin")
{
    return `Orunmila is the only eleri ${eleri}.`;
}

log(Orunmila('Witness of Fate.'));

function invokeEla()
{
    let invocation = Array.from(arguments).forEach((value) => log(value));
    log(invocation);
    let invocation2 = Array.from(arguments).reduce((prev, next) => prev + next);
    log(invocation2);
    return log(arguments, Array.isArray(arguments));
}

invokeEla('Bitch', 'Wife', 'Promise');