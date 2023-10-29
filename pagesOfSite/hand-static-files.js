const fileSystem = require('fs');
const path = require('path');

const handleStaticFiles = (request, response) =>{
    const filePath = './Front' + request.url;
    const responseType = getResponseType(path.extname(filePath));
    fileSystem.readFile(
        filePath,
        'UTF-8',
        (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.end();
                return;
            }
            response.writeHead(200, {'Content-Type':responseType});
            response.write(fileContent);
            response.end();
        }
    );
}

function getResponseType(extension){
    switch(extension){
        case '.html':
        case '.htm':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        default:
            return 'application/octet-stream';
    }
}

module.exports = handleStaticFiles;