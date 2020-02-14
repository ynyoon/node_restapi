const express = require('express');

const server = express();

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

server.listen(3000,()=>{
    console.log("The server is running");
});