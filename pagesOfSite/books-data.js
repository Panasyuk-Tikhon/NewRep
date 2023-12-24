const mssql = require("mssql");
const config = require('./db-config');
const dbService = require('./db-service');


const booksData = (request, response) =>{
    dbService.runQuery('SELECT * FROM book', (error, data) => {
        if(error){
            response.writeHead(500);
            console.log('error');
            return
        }
        const booksData = data.map((b) => {
            return {title: b.title, year: b.year };
        });
        const serializedDate = JSON.stringify(booksData);
            response.writeHead(200, {'Content-Type':'application/json'});
            response.write(serializedDate);
            response.end();
    });
}

module.exports = booksData;