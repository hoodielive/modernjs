/** Write an algorithm that assesses the readiness of a querent for lave-tet.
*  The algorithm should check for:
*   1. Spiritual Preparedness.
*   2. Mental Prepardness.
*   3. Preparations closer to the material spectrum (i.e. financial, health, adaptation).
*/
const log = console.log

let isReady = true;
let isHealthy = true;
let isAdaptable = true;
let isMentallySound = true;
let canAfford = true;
let isVisited = true;

let assessPreparedness = (client) =>
{
    if (!client)
    {
        isReady = false;
    }

    if (client)
    {
        isReady = true;
    }

    if (isReady)
    {
        if (isHealthy)
        {
            if (isMentallySound)
            {
                if (isVisited)
                {
                    if (canAfford)
                    {
                        if (isAdaptable)
                        {
                            return "You are ready!"
                        }
                        else 
                        {
                            return "I am sorry, you are not ready."
                        }
                    }
                }
            }
        }
    }
}

log(assessPreparedness("Tolu"));