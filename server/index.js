const http = require('http');

// Create server
const myServer = http.createServer((req,res)=>{
    console.log('New req rec.'); // Shows on console everytime when refresh
    res.end('hello from server'); // Shows on the server
});

// To start the server
myServer.listen(8000,()=> console.log('server started'));