const {createHash} = require('crypto');


export default function Hasher(data) {
        const hash = createHash('sha256');
        hash.update(data)
        const hashed = hash.digest('hex')

    return hashed
};





