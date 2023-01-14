const log = console.log

let timer = new Promise(function(resolve, reject) {
  log('Init Promise');

  setTimeout(() => {
    log('Timeout done.');
  }, 2000);
});

timer.then(function() {
  log('Proceed now that the timer has concluded.');
});



let inaminute = new Promise(() => {
  log("I will be with you in a minute.");

  setTimeout(() => {
    log(`I appreciate you and we thank you for waiting on me - ${Date()}`);
  }, 2000);
});


inaminute.then(() => {
  log("What does this have to do with anything?");
}) 
