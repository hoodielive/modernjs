/**  If you want write to DOM 
 * const app = document.getElementById('app');
 * app.innerHTML = '<h1>Chillin with the Homie</h1>';
*/

const app = document.getElementById('app');
const app2 = document.getElementById('app2');
const app3 = document.getElementById('app3');
const app4 = document.getElementById('app4');
const log = console.log;

// Function declaration 
function makeEbo()
{
    return "Making ebo is dope!"
}

makeEbo();

// Function Expression (anonymous or named)
const makePsyExpressions = function() {
    log("Psychical development is possible.")
};

log(makePsyExpressions.name);

// Named Function
const makeNewAnointing = function Ase() { return "Ase ooo!" };
app2.innerHTML = `<h1>${makeNewAnointing()}</h1>`
 

// Arrow Function
const makeOgun = () => "Ogun Onire is the Remover of Obstacles";

document.getElementById('app3').innerHTML = makeOgun();

// Default Parameters
function makeOsu(hisOdu="irosu")
{
    if (!hisOdu)
    {
        return "I will never run!"
    }
    else 
    {
        return `Making Osu: ${this.hisOdu.toUpperCase()}`;
    }
}

app3.innerHTML = `<h1>${makeOsu()}</h2>`;

// Function Rest parameters and Args
function invokeOrunmila()
{
    return log(arguments);
}

document.getElementById('app4').innerHTML = `<h2>${invokeOrunmila(11, 33, 44, 55, 99)}</h2>`;


