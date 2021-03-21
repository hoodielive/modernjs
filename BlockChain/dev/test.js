const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIN90SEFSSF', '9032805039509');
bitcoin.createNewBlock(2499, 'KLJDFUKEJKJ', '3256328478247');
bitcoin.createNewBlock(3245, 'FHU8383882J', '45478697894378');

console.log(bitcoin);