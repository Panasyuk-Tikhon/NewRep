const mssql = require("mssql");
const config = require('./db-config');
const dbService = require('./db-service');


const studentData = (request, response) =>{
    dbService.runQuery('SELECT * FROM student', (error, data) => {
        if(error){
            response.writeHead(500);
            console.log('error');
            return
        }
        const studentsData = data.map((s)=> {
            return s.name + " " + s['last name'];
        });
        const serializedDate = JSON.stringify(studentsData);
            response.writeHead(200, {'Content-Type':'application/json'});
            response.write(serializedDate);
            response.end();
    });
}

module.exports = studentData;