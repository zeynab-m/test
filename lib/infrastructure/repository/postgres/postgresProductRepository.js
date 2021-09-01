'use strict';
const productRepository = require('../../../application/domain/product/productRepository');
const postgres= require('../../orm/postgres/knexConnection')
const serializer = require("../../orm/postgres/migrations/serializer");

module.exports = class extends productRepository {

    constructor(productEntity) {
        super()
        this.productEntity=productEntity
        this.table='products'
        this.create=this.create.bind(this)
    }
    async create(products,dbName) {

        let productConnection =await postgres().getConnection(dbName)
        return productConnection(this.table)
            .insert(products)
            .onConflict('id')
            .ignore()


    }
    async findProduct(productId,dbName) {

        let productConnection =await postgres().getConnection(dbName)
        let product =await productConnection(this.table)
            .where({'products.id':productId})
            .select(
                'products.*',
                'discounts.id as discountId',
                'discounts.title as discountTitle',
                'discounts.description as discountDescription',
                'discounts.percent as discountPercent',
                'discounts.code as discountCode',

            )
            .leftOuterJoin('discounts','products.discountId', '=', 'discounts.id')
             product=serializer(product,'product')
        return(product)



    }

}
