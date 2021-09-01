'use strict';


const errors = require('../../domain/utils/errors');

module.exports=class {


    constructor(userRepository,userEntity,cryptoHandler,authHandler) {

        this.userRepository=userRepository;
        this.cryptoHandler=cryptoHandler;
        this.authHandler=authHandler;
        this.userEntity=userEntity;
        this.register=this.register.bind(this);
        this.login=this.login.bind(this);

    }
    async  register(user,dbName){

        //validation

        const userData = await this.userRepository.findUserByUserPhone(user.phoneNumber,dbName);
        if (!userData) {
            let validUser=await this.userEntity.setUser({...user,id:this.cryptoHandler.uuidGenerator()})
            await this.userRepository.create(validUser,dbName);
        }
        let OTPCode= await this.authHandler.resolveOTP(user.phoneNumber)
        if(!OTPCode){
            OTPCode=await this.authHandler.generateOTP(4)
        }

        await this.authHandler.saveOTP(120,user.phoneNumber,OTPCode)

        return OTPCode;

    }
    async  login(phoneNumber,senderOTPCode,dbName) {

        const userData = await this.userRepository.findUserByUserPhone(phoneNumber,dbName);
        if (!userData) {
            throw new errors.userNotExist();
        }
        let OTPCode= await this.authHandler.resolveOTP(phoneNumber)
        if (OTPCode != senderOTPCode) {
            throw new errors.InvalidLoginCredential();
        }
        const token= this.authHandler.generateToken(userData.id)
        return {token,userId:userData.id};
    }




}
