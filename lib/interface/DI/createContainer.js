const diContainer= require('./DIContainer')()
const repositories = require('./dependencies/repositoryDep')
const services = require('./dependencies/serviceDep')
const entities = require('./dependencies/entityDep')
const controllers = require('./dependencies/controllerDep')
const utils = require('./dependencies/utilDep')
const security = require('./dependencies/securityDep')

repositories(diContainer)
services(diContainer)
entities(diContainer)
controllers(diContainer)
utils(diContainer)
security(diContainer)

module.exports=diContainer