const discountTable = (tenant) => {


    return  tenant.schema.hasTable('discounts').then(function (exists) {
        if (!exists) {

            return   tenant.schema.createTable('discounts', (table) => {
                table.uuid('id').notNullable().primary()
                table.string('title').notNullable()
                table.string('description').notNullable()
                table.decimal('percent').notNullable()
                table.string('code').notNullable()
                table.timestamp('deletedAt')
                table.timestamp('createdAt').notNullable()
                table.timestamp('updatedAt').notNullable()


            })
        }
    })

}


module.exports = discountTable
