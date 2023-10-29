const fileSystem = require('fs');
const http = require('http');

const studentPage = (request, response) =>{
    fileSystem.readFile(
        './Front/student.html',
        'UTF-8',
        (error, fileContent) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(fileContent);
            response.end();
        }
    );
}

module.exports = studentPage;