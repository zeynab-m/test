const joi=require('joi')
const myCustomJoi = joi.extend(require('joi-phone-number'));
const validate=require('../validator/validator').validate

const userSchema=joi.object().keys({
    id:joi.string().required(),
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    phoneNumber:myCustomJoi.string().required().phoneNumber({ defaultCountry: 'IR', format: 'e164' }),
    verified:joi.number().default(0).valid(1,0),
    gender:joi.number().required().valid(1,0),
    deletedAt:joi.date().iso().allow(null),//in case of soft delete
    createdAt:joi.date().iso().default(new Date().toISOString()),
    updatedAt:joi.date().iso().default(new Date().toISOString()),
})


class userEntity{

     setUser(input){

            let validInput= validate(input,userSchema)
            let userObject={

                id: validInput.id,
                firstName: validInput.firstName,
                lastName: validInput.lastName,
                phoneNumber:validInput.phoneNumber,
                gender:validInput.gender,
                verified:validInput.verified,
                deletedAt:validInput.deletedAt,
                createdAt:validInput.createdAt,
                updatedAt:validInput.updatedAt,
            }

        return userObject

    }


}
module.exports={
    userEntity
}
