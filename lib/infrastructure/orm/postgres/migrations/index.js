const userTable = require('./userTable')
const productTable = require('./productTable')
const categoryTable = require('./categoryTable')
const discountTable = require('./discountTable')

const migrate = async (tenant) => {

  await userTable(tenant)
  await discountTable(tenant)
  await categoryTable(tenant)
  await productTable(tenant)
  return true

}

module.exports = migrate
