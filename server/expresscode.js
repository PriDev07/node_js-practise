const http = require("http")
const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello from homepage');
});
app.get('/About',(req,res)=>{
    return res.send('Hello from About')
});
app.listen(8000,()=>console.log("Server started"));