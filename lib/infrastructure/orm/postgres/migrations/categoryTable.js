const categoryTable = (tenant) => {


    return  tenant.schema.hasTable('categories').then(function (exists) {
        if (!exists) {

            return   tenant.schema.createTable('categories', (table) => {
                table.uuid('id').notNullable().primary()
                table.uuid('parentId').nullable()
                table.uuid('discountId').nullable()
                table.string('title').notNullable()
                table.string('metaDate')
                table.specificType("path", "varchar[]").notNullable()
                table.jsonb('specification')
                table.timestamp('deletedAt')
                table.timestamp('createdAt').notNullable()
                table.timestamp('updatedAt').notNullable()
                table.foreign('parentId')
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


module.exports = categoryTable
