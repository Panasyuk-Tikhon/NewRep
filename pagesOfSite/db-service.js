const mssql = require("mssql");
const config = require('./db-config');

const runQuery = (query, callBack) => {

    mssql.connect(config, (error, result) =>{
        if(error){
            console.log("error !!!");
            callBack(error)
            return;
        }
        console.log('connected to the db');
        mssql.query(query, (error, result) => {
            if(error){
                callBack(error)
            }
            callBack(null, result.recordset);
            
        });
    });    
}

module.exports = {
    runQuery: runQuery
};