const handler = require('./database_handler')
let client = null;


module.exports.connectDatabase = function(){
    client = handler.connectDatabase();
}

module.exports.closeDatabase = function(){
    handler.closeDatabase();
}

module.exports.query = async function (argument){

    let pool = handler.getPool();
    await pool.query(argument);
    let res = null;
    await pool.query(argument).then(
        result =>{
            res = result;
            //console.log(res);
        }
    )
    //console.log(res);
    return res;
}
