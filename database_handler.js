const dbSett = require('./db_settings');
const { Pool } = require('pg');
let pool = null;



module.exports.connectDatabase = async function(ssh_a = false) {


        /** @type {import('pg').ConnectionConfig} */
        const connectionConfig = {
            user: dbSett.getDbSettings('user'),
            database: dbSett.getDbSettings('database'),
            password: dbSett.getDbSettings('password'),
            port: dbSett.getDbSettings('port'),
        };

        pool =  new Pool(connectionConfig);

        return pool


}

module.exports.closeDatabase = function (){
    pool.end;
}

module.exports.getPool = function (){
    return pool;
}

// module.exports.query = async function (args){
//     return pool.query(args);
// }







