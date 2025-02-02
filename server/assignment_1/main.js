const http = require('http');
const fs = require('fs');
// ASSIGNMENT 1 = Create a log file which save all the logs of the server
const myServer = http.createServer((req,res)=>{
    const log =`${Date.now()}, ${req.url},: new req receiver`;
    fs.appendFile('log.txt',log,(err, data)=>{
        switch(req.url){
            case '/':
                res.end('HomePage');
                break;
            case '/contact':
                res.end('on contact screen');
                break;
            default:
                res.end('404 not found');
        }
    });
})
myServer.listen(8000,()=>console.log('server started'))