/** Write an algorithm that assesses the readiness of a querent for lave-tet.
*  The algorithm should check for:
*   1. Spiritual Preparedness.
*   2. Mental Prepardness.
*   3. Preparations closer to the material spectrum (i.e. financial, health, adaptation).
*/
const log = console.log

let isReady = true;
let ishealthy = false;
let isAdaptable = false;
let isMentallySound = false;
let canAfford = false;
let isVisited = false;

let assessPreparedness = (client) =>
{
    if (!client)
    {
        isReady = false;
    }
    else if (client)
    {
        isReady = true;
    }
    return isReady;
}

log(assessPreparedness("Tolu"));