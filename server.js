const express = require('express');
const bodyParser = require('body-parser');

const server = express();

//express 서버에서 bodyParser.json()을 사용할 수 있도록 함.
server.use(bodyParser.json());

const users = [
    {
        id:"111",
        name:"Danny",
        email:"danny@gmail.com"
    },
    {
        id:"222",
        name:"Jenny",
        email:"Jennsdi@gmail.com"
    }
];

server.get("/api/user", (req,res) =>{
    res.json(users);
});

server.post("/api/user", (req,res) =>{
    console.log(req.body);
    users.push(req.body);
    res.json(users);
});

server.listen(3000,()=>{
    console.log("The server is running");
});