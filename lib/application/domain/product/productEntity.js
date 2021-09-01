const joi=require('joi')
const validate=require('../validator/validator').validate

const productSchema=joi.object().keys({
    id:joi.string().required(),
    categoryId:joi.string().required(),
    discountId:joi.string().allow(null),
    price:joi.number().required(),
    metaDate:joi.string().required(),
    specification:joi.object().allow({}),
    title:joi.string().required(),
    deletedAt:joi.date().iso().allow(null),//in case of soft delete
    createdAt:joi.date().iso().default(new Date().toISOString()),
    updatedAt:joi.date().iso().default(new Date().toISOString()),
})


class productEntity {


     setProduct(input){

            let validInput= validate(input,productSchema)
            let productObject={

                id: validInput.id,
                categoryId: validInput.categoryId,
                discountId: validInput.discountId,
                price:validInput.price,
                title:validInput.title,
                metaDate:validInput.metaDate,
                specification:validInput.specification,
                deletedAt:validInput.deletedAt,
                createdAt:validInput.createdAt,
                updatedAt:validInput.updatedAt,
            }

        return productObject

    }


}
module.exports={
    productEntity
}
