'use strict';
const crudBaseClass = require('../utils/crudBaseClass');


module.exports = class extends crudBaseClass{
    constructor() {
        super();
    }

    findUserByUserPhone(phone,dbName) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

};
