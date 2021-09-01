const joi= require('joi')
const myCustomJoi = joi.extend(require('joi-phone-number'));


module.exports.login=joi.object().keys({

    phoneNumber:myCustomJoi.string().required().phoneNumber({ defaultCountry: 'IR', format: 'e164' }),
    OTPCode:joi.string().required(),
})
module.exports.register=joi.object().keys({
    firstName: joi.string().required(),
    phoneNumber:myCustomJoi.string().required().phoneNumber({ defaultCountry: 'IR', format: 'e164' }),
    lastName: joi.string().required(),
    gender:joi.number().required().valid(1,0),
})
