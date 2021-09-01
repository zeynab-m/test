'use strict';
const categoryRepository = require('../../../application/domain/category/categoryRepository');
const postgres= require('../../orm/postgres/knexConnection')
const serializer = require("../../orm/postgres/migrations/serializer");
module.exports = class extends categoryRepository {

    constructor(categoryEntity) {
        super()
        this.categoryEntity=categoryEntity
        this.table='categories'
        this.create=this.create.bind(this)

    }

    async create(categfories,dbName) {


        let categoryConnection =await postgres().getConnection(dbName)
        return await categoryConnection(this.table)
            .insert(categfories)
            .onConflict('id')
            .ignore()



    }
    async CheckAncestorsDiscount(categoryId,dbName) {
        console.log({categoryId,dbName})

        let categoryConnection =await postgres().getConnection(dbName)
        let categories=  await categoryConnection(this.table)
            .withRecursive('ancestors', (qb) => {
                qb.select('categories.id','categories.title','categories.parentId','categories.discountId','categories.path').from('categories').where('categories.id',categoryId,).union((qb) => {
                    qb.select('categories.id','categories.title','categories.parentId','categories.discountId','categories.path').from('categories').join('ancestors', 'ancestors.parentId', 'categories.id')
                })
            }).select('*').from('ancestors')
            .select(
                'ancestors.*',
                'discounts.id as discountId',
                'discounts.title as discountTitle',
                'discounts.description as discountDescription',
                'discounts.percent as discountPercent',
                'discounts.code as discountCode',

            )
            .leftOuterJoin('discounts', 'ancestors.discountId', '=', 'discounts.id')
            categories=serializer(categories,'category')
        return categories





    }
/*
    async CheckAncestorsDiscount(path,dbName) {
        console.log({path,dbName})

        let categoryConnection =await postgres().getConnection(dbName)
        return await categoryConnection(this.table)
            .whereIn('categories.id',path)
            .select(
            'categories.*',
                categoryConnection.raw(`jsonb_build_object('title', discounts.title,'id', discounts.id,'description',discounts.description,'percent',discounts.percent) as discount`)
            )
            .leftOuterJoin('discounts', 'categories.discountId', '=', 'discounts.id')




    }
*/



}
