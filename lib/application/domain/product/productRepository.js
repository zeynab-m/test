'use strict';
const crudBaseClass = require('../utils/crudBaseClass');


module.exports = class extends crudBaseClass{
    constructor() {
        super();
    }
    findProduct(productId,dbName) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    checkDiscount(productId,dbName) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};
