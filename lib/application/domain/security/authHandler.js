module.exports=class{

    async generateOTP(length){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');

    }
    generateToken(data,salt){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');

    }
    async validation(data,hashed,salt){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');

    }
    async saveOTP(phone,OTP){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');

    }
    async resolveOTP(phone){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');

    }



}
