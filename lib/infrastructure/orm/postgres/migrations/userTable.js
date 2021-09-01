const userTable = (tenant) => {

    return tenant.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return tenant.schema.createTable('users', (table) => {
                table.uuid('id').notNullable().primary()
                table.string('firstName').notNullable()
                table.string('lastName').notNullable()
                table.string('phoneNumber').notNullable().unique()
                table.integer('verified',1)
                table.integer('gender',1).notNullable()
                table.timestamp('deletedAt')
                table.timestamp('createdAt').notNullable()
                table.timestamp('updatedAt').notNullable()
            })
        }
    })

}

module.exports = userTable
