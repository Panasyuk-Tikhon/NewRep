const mssql = require("mssql");
const config = require('./db-config');
//const { config } = require("process");

const studentData = (request, response) =>{
    //const students = ['ivan', 'sergey'];

    mssql.connect(config, (error, result) =>{
        if(error){
            console.log("error !!!");
            return;
        }
        console.log('connected to the db');
        const studentsQuery = 'SELECT * FROM student';
        mssql.query(studentsQuery, (error, result) => {
            const students = result.recordset.map((s) => {
                return s.name + " " + s['last name'];
            });
            const serializedDate = JSON.stringify(students);
            response.writeHead(200, {'Content-Type':'application/json'});
            response.write(serializedDate);
            response.end();
        });
    });    
}


module.exports = studentData;