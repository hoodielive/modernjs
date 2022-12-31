const log = console.log
const anotherID = '123456ABC'

function makeDeal(id) 
{
    function anotherFunction()
    {
        const someID = 99;
        return(id, anotherID, someID)
    }
    anotherFunction();
}
makeDeal(anotherID)

function makeCarPartID(id)
{
    const theID = `CAR_PART_${id}`;
    return function(name) {
        return `${theID}_${name.toUpperCase()}`;
    };
}

const carPartId = makeCarPartID('x8YdsZ12');
log(carPartId('Left Door'));
log(carPartId('Right Door'));
log(carPartId('Windscreen'));