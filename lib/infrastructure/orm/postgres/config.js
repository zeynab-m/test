let dbs = [
    {

        database: 'postgres',
        host: 'db',
        port: 5432,
        user: 'postgres',
        password: 'postgres',


    }]

const config = {
    client: 'pg',
    connection: {
        user: "",
        host: "",
        port:"",
        database: "",
        password: ""
    },
    pool: { min: 2, max: 10 }
}

module.exports = { dbs,config }