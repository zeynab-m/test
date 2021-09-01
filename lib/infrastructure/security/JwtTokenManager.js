'use strict';
const jwt_simple      = require('jwt-simple');
const authHandler= require('../../application/domain/security/authHandler')
const errors = require('../../application/domain/utils/errors');
const redis   = require('../orm/redis/redis');
const crypto = require("crypto");
const secret=process.env.SECRET_KEY


module.exports=class extends authHandler{

  constructor() {
    super();

  }

   generateToken(payload){
      return jwt_simple.encode(payload, secret);


  }
  validation(req, res, next){

      if(req.get('GUARD')===false ||req.get('GUARD')==="false") return next()
      let token = req.get('token');
      let payload=req.body.userId
      const decoded = jwt_simple.decode(token, secret);
      if (decoded == payload) next()

      else
        throw new errors.JWTAuthenticationError()



  }

  generateOTP(length){
    return new  Promise((resolve,reject) =>
        crypto.randomBytes(length, (err, buffer) => {
          (
              resolve(parseInt(buffer.toString("hex"), 16)
                  .toString()
                  .substr(0, length)
              ));
        })
    )

  }
  async saveOTP(duration,userPhone,OTP){
    const client = await redis("1");
    await client.hmset(userPhone, 'OTPCode',OTP)
    await client.expire(userPhone, duration)

    return true

  }
  async resolveOTP(userPhone){
    const client = await redis("1");
    const [OTPCode] = await client.hmget(userPhone, 'OTPCode');

    return OTPCode
  }



}


