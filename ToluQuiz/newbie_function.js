const log = console.log

function invokeEla()
{
    let invocation = Array.from(arguments).forEach(value => log(value));
    let invocation2 = Array.from(arguments).reduce((prev, next, index) => prev + ' ' + next + ' ' + index);
    log(invocation2);
    return log(arguments, invocation, Array.isArray(arguments));
} 

function divination(...params)
{
    const total = params.reduce((prev, next) => `${prev}, ${next}`);
    return total;
}

const divination_systems = divination('Odu Ifa', 'Merindinglogun', 'Erindinlogun', 'Bones', 'Prophecy');
log(`Total: ${ divination_systems }`)