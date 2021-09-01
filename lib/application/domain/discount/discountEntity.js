const joi=require('joi')
const validate=require('../validator/validator').validate

const discountSchema=joi.object().keys({
    id:joi.string().required(),
    title:joi.string().required(),
    code:joi.string().required(),
    description:joi.string().required(),
    percent:joi.number().required(),
    deletedAt:joi.date().iso().allow(null),//in case of soft delete
    createdAt:joi.date().iso().default(new Date().toISOString()),
    updatedAt:joi.date().iso().default(new Date().toISOString()),
})


class discountEntity {


     setDiscount(input){

            let validInput= validate(input,discountSchema)
            let discountObject={

                id: validInput.id,
                title: validInput.title,
                code: validInput.code,
                description: validInput.description,
                percent:validInput.percent,
                deletedAt:validInput.deletedAt,
                createdAt:validInput.createdAt,
                updatedAt:validInput.updatedAt,
            }

        return discountObject

    }


}
module.exports={
    discountEntity
}
