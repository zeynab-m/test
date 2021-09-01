const Redis = require("ioredis");
const connections = {};
const config = {
    port: 6379, // Redis port
    host: "redis", // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    db: 0
}

module.exports = function(db) {
    return new Promise(
        (resolve, reject) => {

            if (connections[db]) {
                resolve(connections[db]);
                return;
            };
            
            connections[db] = new Redis({...config, db});
            connections[db].on('connect', function(){
                resolve(connections[db])
            });
            connections[db].on('error', function(err){
                reject(err)
            });

        }
    )
}