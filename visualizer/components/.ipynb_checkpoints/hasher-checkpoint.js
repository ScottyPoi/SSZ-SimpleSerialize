const {createHash} = require('crypto');


// export default function Hasher(props) {
//         const hash = createHash('sha256');
//         const data = props.data;
//         hash.update(data)
//         const hashed = hash.digest('hex')

//     return hashed
// };







// test
const testData = "some test data"
// create hash object
const testDataHash = createHash('sha256')
// give it test data
testDataHash.update(testData);
// generate sha256 hash
const testDataCopyHash = createHash('sha256');
// make new hash object, with same data
testDataCopyHash.update(testData)
const testDataEncoded = testDataHash.digest('hex');
const testDataCopyEncoded = testDataCopyHash.digest('hex');
// hashed values should be equal
console.log(testDataEncoded == testDataCopyEncoded);
console.log(testDataEncoded)
console.log(testDataCopyEncoded)
