const fileSystem = require('fs');
const http = require('http');

const homePageOfSite = (request, response) => {
    fileSystem.readFile(
        './Front/index.html',
        'UTF-8',     
        (error, fileContent) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(fileContent);
            response.end();
        }
    );
}

module.exports = homePageOfSite;