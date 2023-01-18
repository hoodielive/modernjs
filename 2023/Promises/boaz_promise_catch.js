const log = console.dir

let boaz = new Promise((resolve, reject) => {
    setTimeout(() => {
        let custody = !true;
        (custody) ? resolve('done') : reject(new Error("Whoops!"))
    }, 5000);
}).catch(
    error => log('Sorry, homie this did not work out the way you wanted it to.')
).finally(() => log('Its over. Stop loading.'))


function resolveUnderThreeSeconds(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay)
        setTimeout(reject, 3000).catch(log('Okay, Stop!!!'))
    })
}
