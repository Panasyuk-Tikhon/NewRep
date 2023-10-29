const fileSystem = require('fs');
const http = require('http');
const homePageOfSite = require('./pagesOfSite/homePage');
const studentPage = require('./pagesOfSite/students');
//const handleStaticFiles = require('./pagesOfSite/hand-static-files');
const { error } = require('console');
const handleStaticFiles = require('./pagesOfSite/hand-static-files');

const requestHandler = (request, response) =>{
    const url = request.url;
    switch(url){
        case '/':
            homePageOfSite(request, response);
            break;
        case '/students':
            studentPage(request, response);
            break;
        default:
            handleStaticFiles(request, response);
            //break;
    }
    console.log(request.url);
}
const server = http.createServer(requestHandler);
server.listen(4200);

console.log("server started");