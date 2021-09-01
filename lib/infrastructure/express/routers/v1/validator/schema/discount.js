const joi=require('joi')

module.exports.check=joi.object().keys({
    productId: joi.string().required(),
    userId: joi.string().required(),
    invoiceAmount: joi.number().required(),

})

