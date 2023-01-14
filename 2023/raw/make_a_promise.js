const log = console.dir;

let influence = function(length) {
  return new Promise((resolve, reject) => {
  log('Get a prophet in your ear.');

  setTimeout(() => {
    log(`It's ${Date()}.`);
    resolve();
  }, length);
})};

influence(4000).then(() => {
  log('Go ahead and think.');
});


log('Go ahead and think.');
