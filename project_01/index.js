const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;
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
app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id); //Taking id value from route
    const user = users.find((user)=> user.id === id);
    return res.json(user);
}).patch((req,res)=>{
    return res.json({Status : "Pending"});
}).delete((req,res)=>{
    return res.json({status:"Deleting"})
})
app.post("/api/users",(req,res)=>{
    return res.send("request pending");
})

app.listen(PORT, ()=>console.log("server stared at port 8000"))