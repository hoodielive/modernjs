var myVar = 1; 

function a() {
    let myVar = 2; 
    console.log(myVar);

    for (let i = 0; i < 3; i++) {
        console.log(myVar);

        for(let j = 0; j < 3; j++) {
            console.log(myVar)
        }
    }
}