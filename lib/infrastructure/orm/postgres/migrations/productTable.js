const productTable = (tenant) => {


    return  tenant.schema.hasTable('products').then(function (exists) {
        if (!exists) {

            return   tenant.schema.createTable('products', (table) => {
                table.uuid('id').notNullable().primary()
                table.uuid('categoryId').notNullable()
                table.uuid('discountId').nullable()
                table.decimal('price')
                table.string('title').notNullable()
                table.string('metaDate').notNullable()
                table.jsonb('specification')
                table.timestamp('deletedAt')
                table.timestamp('createdAt').notNullable()
                table.timestamp('updatedAt').notNullable()
                table.foreign('categoryId')
                    .references('id')
                    .inTable('categories')
                    .onDelete('CASCADE')
                table.foreign('discountId')
                    .references('id')
                    .inTable('discounts')
                    .onDelete('CASCADE')

            })
        }
    })

}


module.exports = productTable
