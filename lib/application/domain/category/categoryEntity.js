const joi=require('joi')
const validate=require('../validator/validator').validate

const categorySchema=joi.object().keys({
    id:joi.string().required(),
    parentId:joi.string().allow(null),
    discountId:joi.string().allow(null),
    title:joi.string().required(),
    path:joi.array().required().default([]),
    metaDate:joi.string().allow(''),
    specification:joi.object().allow({}),
    deletedAt:joi.date().iso().allow(null),//in case of soft delete
    createdAt:joi.date().iso().default(new Date().toISOString()),
    updatedAt:joi.date().iso().default(new Date().toISOString()),
})


class categoryEntity {


     setCategory(input){

            let validInput= validate(input,categorySchema)
            let categoryObject={

                id: validInput.id,
                parentId: validInput.parentId,
                discountId: validInput.discountId,
                title:validInput.title,
                path:validInput.path,
                metaDate:validInput.metaDate,
                specification:validInput.specification,
                deletedAt:validInput.deletedAt,
                createdAt:validInput.createdAt,
                updatedAt:validInput.updatedAt,
            }

        return categoryObject

    }


}
module.exports={
     categoryEntity
}
