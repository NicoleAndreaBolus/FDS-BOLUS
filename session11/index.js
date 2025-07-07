// SESSION 11: Server preparation and creation

// Since node.js is already installed in our devices, we can require the application by declaring a variable and requiring the said module.

const http = require("http");

// Port Creation

const port = 4000;

// Mock Database using an array

let items = ["Laptop", "Phone"];
let users = ["Alice", "Bob"];



// App - Server Creation via http/node

const app = http.createServer((request, response) => {

    // Endpoint Creation via Node Server
    // To access this endpoint, we will be using localhost
    // localhost:4000/greeting
    // if deployed, www.mylink.com/greeting

    if(request.url == "/greeting") {
        response.end("Hello, World!");

    }else if(request.url == "/homepage") {
        response.end("Welcome to the Homepage, User!");

    }else if(request.url == "/about") {
        response.writeHead(200);
        response.end("This is the About Page.");

    }else if(request.url == "/items" && request.method == "GET") {
        response.writeHead(200);
        response.end(JSON.stringify(items));

    }else if(request.url == "/items/add" && request.method == "POST") {
        response.writeHead(201);
        items.push("Desktop"); // Simulating adding a new item
        response.end("Item added successfully");

    }else if(request.url == "/login" && request.method == "GET") {
        if(users.length > 0) {
            response.writeHead(200);
            response.end("Login successful. Welcome back, " + users[0] + "!"); // Simulating a login
        } else {
            response.writeHead(401);
            response.end("Login failed. No users found.");
        }

    }else if(request.url == "/register" && request.method == "POST") {
        if(users.length < 1) {
            response.writeHead(201);
            users.push("Charlie"); // Simulating user registration
            response.end("User registered successfully.");
        } else {
            response.writeHead(400);
            response.end("User registration failed. Maximum users reached.");
        }

    }else if(request.url == "/items/delete" && request.method == "DELETE") {
        if(items.length > 0) {
            response.writeHead(200);
            items.pop();
            response.end("Item deleted successfully");
        }else {
            response.writeHead(400);
            response.end("Database is already empty.");
        }
    }else
        response.writeHead(404);
        response.end("ERROR 404: Page Not Found!");

});


// request and response are the two parameters that will be passed to the function
// client to server communication - request and response
// forward slash on urls are endpoints









// Port Listening

app.listen(port); // The app will listen to the port 4000

// Confirmation Message
console.log(`Server is now running at port ${port}.`); // This will print a message in the console to confirm that the server is running