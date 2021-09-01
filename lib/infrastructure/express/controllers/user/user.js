'use strict';

module.exports=class {

    constructor(userService) {

        this.userService=userService
        this.register=this.register.bind(this)
        this.login=this.login.bind(this)

    }


    async register(req, res, next){
        try {
             let OTPCode=await this.userService.register(
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNumber:req.body.phoneNumber,
                    gender:req.body.gender,
                },
                req.dbName
            )
            res.json({...req.json,
                data:{
                    OTPCode,
                    message:"your OTP code will expire in 2 minute",
                }
            });

        } catch (e) {

            next(e)

        }


    }

    async login(req, res, next){

        try {

            const {userId,token} = await this.userService.login(
                req.body.phoneNumber,
                req.body.OTPCode,
                req.dbName
            );
            res.json({...req.json,
                data:{
                    userId,
                    token,
                }
            });


        } catch (err) {
            next(err);
        }
    }



}


