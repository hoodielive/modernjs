const log = console.log
// let prompt = require("readline-sync")

let element = "fire"

function returnMsg() 
{
    log("You have found your element kind sir.")
}

switch(element)
{
    case "earth":
        log("This is the place you live.")
        break;
    case "water":
        log("You have found elemental water.")
        break;
    case "air":
        log("You have found elemental air.")
        break;
    case "fire":
        break;
    default:
        log("You haven't found what you are looking for.")
        break;
}