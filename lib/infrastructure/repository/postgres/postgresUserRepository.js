'use strict';
const userRepository = require('../../../application/domain/user/userRepository');
const postgres = require('../../orm/postgres/knexConnection')
module.exports = class extends userRepository {

    constructor(userEntity) {
        super()
        this.userEntity=userEntity
        this.table='users'
        this.create=this.create.bind(this)

    }

    async create(user,dbName) {

        let userConnection =await postgres().getConnection(dbName)
        console.log({userConnection})
        await userConnection(this.table).insert({
            'id':user.id,
            'firstName':user.firstName,
            'lastName':user.lastName,
            'phoneNumber':user.phoneNumber,
            'gender':user.gender,
            'verified':user.verified,
            'deletedAt':user.deletedAt,
            'createdAt':user.createdAt,
            'updatedAt':user.updatedAt,
        })

        return true




    }
    async findUserByUserPhone(phone,dbName) {

        let userConnection =await postgres().getConnection(dbName)
        let user= await userConnection(this.table)
            .where({phoneNumber:phone})
            .select('*')
        return user[0]




    }




}
