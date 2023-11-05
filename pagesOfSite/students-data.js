const fileSystem = require('fs');
const http = require('http');

const studentData = (request, response) =>{
    const students = ['ivan', 'sergey'];
    const serializedDate = JSON.stringify(students);
        response.writeHead(200, {'Content-Type':'application/json'});
        response.write(serializedDate);
        response.end();
}


module.exports = studentData;