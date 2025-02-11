const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;
const fs = require("fs");
const { json } = require("stream/consumers");

app.use(express.urlencoded({extended: false})); // Middleware

// for HTML rendering
app.get("/users",(req,res)=>{
    const html = `<ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
})
// for sending json data
app.get("/api/users", (req,res)=>{
    return res.json(users);
})

// For Doing task according to different http methods
app.route("/api/users/:id").get((req,res)=>{
    res.setHeader('X-MyHeader', 'Priyanshu Lohani') //custom header
    //Always use X as prefix in custom header for better practise
    const id = Number(req.params.id); //Taking id value from route
    const user = users.find((user)=> user.id === id);
    return res.json(user);
}).patch((req,res)=>{
    return res.json({Status : "Pending"});
}).delete((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    users.splice(id,1);
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"sucess"});
    });
})

// For POST
app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({ ...body,id: users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"sucess", id: users.length});
    });
})

app.listen(PORT, ()=>console.log("server stared at port 8000"))