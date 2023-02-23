const fs = require('fs')

fs.readFile('/tmp/hello.txt', { encoding: 'utf8'}, (err, content) => {
  if (err) return console.error(err)

  // No error occurred, content is a string
  console.log(content);
})


fs.readFile('binary', (err, binaryContent) => {
  if (err) console.error(err);

  console.log(content.toString('hex'));
})
