// Preparation of Express Server

const express = require("express");


// Create the server and store in a variable
const app = express();


// Port Number
const port = 5000;

// Middlewares

app.use(express.json()); // role- to convert incoming and outgoing data to JS Object 
app.use(express.urlencoded({extended: true})); // it allows users to input data in a form | reads/fetch data from a form

// Server Routes

app.get("/hello", (req, res) => {
    res.status(200).send("Hello, World!");
});

let friends = [];

// Get all friends

app.get("/friends/list", (req, res) => {
    if (friends.length <= 0) {
        res.status(200).send("No friends found.");
    }else{
        res.status(200).send(friends);
    }
});

// Getting an input from postman
app.get("/input", (req, res) => {
    res.send(`Hello, ${req.body.name}`)
});

// Add a friend

app.post("/friends/add", (req, res) => {
    let friend = req.body.name;
    
    let checkFriend = friends.includes(friend);

    if (checkFriend) {
        res.send(`You have already added ${friend} as a friend.`);
    }else{
        friends.push(friend);
    res.status(201).send(`Your friend ${friend} was added successfully.`);
    }
});

// Unfriend

app.post("/friends/unfriend", (req, res) => {
    let friend = req.body.name;

    let checkFriend = friends.includes(friend);

    if (!checkFriend) {
        res.send(`You have not added ${friend} as a friend.`);
    }else{
        friends = friends.filter(f => f !== friend);
    res.status(200).send(`Your friend ${friend} was removed successfully.`);
    }
});



// Port Listening
app.listen(port, () => 
    console.log(`Server is now up and running at port ${port}.`)
);
