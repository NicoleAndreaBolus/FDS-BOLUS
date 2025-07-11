// SESSION 11: Server preparation and creation

const http = require("http");

// Port Creation
const port = 4000;

// Mock Database using an array
const items = ["Laptop", "Phone"];
const users = ["Alice", "Bob"];

// App - Server Creation via http/node
const app = http.createServer((request, response) => {

    // Endpoint Creation via Node Server
    // localhost:4000/greeting


    // Greeting Endpoint
    if (request.url == "/greeting") {
        response.end("Hello, World!");
    // Home Page Endpoint
    } else if (request.url == "/homepage") {
        response.end("Welcome to the Homepage, User!");
    // About Page Endpoint
    } else if (request.url == "/about") {
        response.writeHead(200);
        response.end("This is the About Page.");
        // Items Endpoint
    } else if (request.url == "/items" && request.method == "GET") {
        response.writeHead(200);
        response.end(JSON.stringify(items));
        // Add Item Endpoint
    } else if (request.url == "/items/add" && request.method == "POST") {
        response.writeHead(201);
        items.push("Desktop"); // Simulating adding a new item
        response.end("Item added successfully");

        // Login Endpoint
    } else if (request.url == "/login" && request.method == "GET") {
        if (users.length > 0) {
            response.writeHead(200);
            response.end("Login successful. Welcome back, " + users[0] + "!"); // Simulating a login
        } else {
            response.writeHead(401);
            response.end("Login failed. No users found.");
        }

        // Registration Endpoint
    } else if (request.url == "/register" && request.method == "POST") {
        if (users.length < 10) {
            response.writeHead(201);
            users.push("Charlie"); // Simulating user registration
            response.end("User registered successfully.");
        } else {
            response.writeHead(400);
            response.end("User registration failed. Maximum users reached.");
        }
        // Delete Item Endpoint
    } else if (request.url == "/items/delete" && request.method == "DELETE") {
        if (items.length > 0) {
            response.writeHead(200);
            items.pop();
            response.end("Item deleted successfully");
        } else {
            response.writeHead(400);
            response.end("Database is already empty.");
        }
        // Default Case for 404
    } else {
        response.writeHead(404);
        response.end("ERROR 404: Page Not Found!");
    }

});

// Port Listening
app.listen(port);

// Confirmation Message
console.log(`Server is now running at port ${port}.`);
