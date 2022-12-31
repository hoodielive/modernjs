const log = console.log

const iife = ((id) => {
    const theID = `CAR_PART_${id}`;
    return(name) => `${theID}_${name}`;
})('x7H8sFf');

log(iife('Left Door'));
log(iife('Right Door'));
log(iife('Windshield'));