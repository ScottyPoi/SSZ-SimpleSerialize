const {createHash} = require('crypto');
const testData = "some test data"
const hash = createHash('sha256')
hash.update(testData);
const same = createHash('sha256');
same.update(testData)
const encoded = hash.digest('hex');
const sameEncoded = same.digest('hex');

console.log(encoded == sameEncoded);