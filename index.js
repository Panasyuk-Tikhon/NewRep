const fileSystem = require('fs');
const http = require('http');
const homePageOfSite = require('./pagesOfSite/homePage');
const studentPage = require('./pagesOfSite/students');
const booksData = require('./pagesOfSite/books-data');
const handleStaticFiles = require('./pagesOfSite/hand-static-files');
const studentData = require('./pagesOfSite/students-data');

const requestHandler = (request, response) =>{
    const url = request.url;
    switch(url){
        case '/':
            homePageOfSite(request, response);
            break;
        case '/students':
            studentPage(request, response);
            break;
        case '/data/students':
            studentData(request, response);
            break;
        case '/data/books':
            booksData(request, response);
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