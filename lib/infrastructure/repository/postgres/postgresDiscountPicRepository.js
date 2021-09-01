'use strict';
const discountRepository = require('../../../application/domain/discount/discountRepository');
const postgres= require('../../orm/postgres/knexConnection')

module.exports = class extends discountRepository{

    constructor(discountEntity) {
        super()
        this.discountEntity=discountEntity
        this.table='discounts'
        this.create=this.create.bind(this)
    }
    async create(discounts,dbName) {

        let discountConnection =await postgres().getConnection(dbName)
        return await discountConnection(this.table)
            .insert(discounts)
            .onConflict('id')
            .ignore()
    }




}
