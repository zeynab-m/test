'use strict';
 const constants= require("./constant")
 const postgresOrm= require("../orm/postgres/knexConnection")

module.exports=()=>{
    return{
        init
    }

    async function init(){

         await dbInitiation()

     }
    async function dbInitiation(){

        switch (process.env.DB_DIALECT){
            case constants.SUPPORTED_DATABASE.POSTGRES:

                await postgresOrm().connect()
                break;

            default:
                await mongoDriverOrm().connect()


        }
        if(process.env.REDIS==='Enable'){
            const redis = require('../orm/redis/redis');
            redis("1").then(client => {
                client.flushall();
            })

        }

    }




}
