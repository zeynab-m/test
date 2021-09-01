const cryptoHandler= require('../../../application/domain/utils/cryptoHandler')
const {randomBytes, pbkdf2,randomUUID}= require('crypto')


module.exports=class extends cryptoHandler{

    constructor() {
        super();

    }
    async saltGenerator(length){

        if (!length) length = 32;
        return randomBytes(length).toString('hex')
    }
    async compareHash(data,hashed,salt){
        return new Promise((resolve, reject) => {
            pbkdf2(data, salt, 1000, 64, 'sha256', (err, hash) => {
                if (err) return reject(err);
                return resolve(hash.toString('hex')=== hashed)
            })
        })

    }
    hashGenerate(data,salt){

        return new Promise((resolve, reject) => {
            pbkdf2(data, salt, 1000, 64, 'sha256', (err, hash) => {
                if (err) return reject(err);
                return resolve(hash.toString('hex'))
            })
        })
    }
    uuidGenerator(){
        return randomUUID()

    }



}

