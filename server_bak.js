const express = require('express');
const bodyParser = require('body-parser');

const server = express();

//express 서버에서 bodyParser.json()을 사용할 수 있도록 함.
server.use(bodyParser.json());

const users = [
    {
        id: "aaa",
        name: "Danny",
        email: "danny@gmail.com"
    },
    {
        id: "bbb",
        name: "Jenny",
        email: "Jennsdi@gmail.com"
    }
];

server.get("/api/user", (req, res) => {
    res.json(users);
});

///express 사용시 /api/user 까지 같을 경우 뒤에 꼬리 달린 url을 코드상 아래에 위치해야 한다.
server.get("/api/user/:id", (req, res) => {
    console.log(req.params.id);
    //find 함수 사용
    const user = users.find((u) => {
        return u.id === req.params.id;
    });

    //user가 있으면 리턴, 없으면 에러메시지 리턴
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ errorMessage: "User was not found" });
    }
});

server.post("/api/user", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(users);
});

server.put("/api/user/:id", (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1) {
        res.status(404).json({ errorMessage: 'user was not found' });
    } else {
        users[foundIndex] = {...users[foundIndex], ...req.body};
        res.json(users);
    }
});

server.delete("/api/user/:id", (req,res) =>{
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404).json({errorMessage: "User was not found"});
    }else{
        let foundUser = users.splice(foundIndex, 1);
        res.json(foundUser[0]);
    }
});

server.listen(3000, () => {
    console.log("The server is running");
});