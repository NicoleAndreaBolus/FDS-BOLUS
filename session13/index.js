const express = require("express"); 
const mysql = require("mysql2"); // mysql2 package
const bodyParser = require("body-parser"); // body parser package


const app = express(); // server
const port = 3000; // port number

// Middlewares
app.use(express.json()); // incoming/outgoing convert to json
app.use(express.urlencoded({extended: true})); // fetch user inputs from forms/encoded data
app.use(bodyParser.json()); // converts SQL to JSON data
app.use(bodyParser.urlencoded({ extended: true })); // parse URL-encoded data

// DB Connection Settings
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "task_management"
});

//  DB Con Confirmation Message
db.connect((err) => {
    if(err){
        console.log("Error connecting in MySQL database.");
    }else{
        console.log("MySQL database connected successfully.");
    }
});
// Routes
// Get all task

app.get("/tasks/all", (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, result) => {
        if(err){
            res.send("ERROR: Cannot retrieve all tasks.");
            return;
        }else{
            if(result.length <= 0){
                res.send("There are no tasks found.");
            }else{
                res.json(result);
            }
        }
    });
});


// Add a new task

app.post("/tasks/create", (req, res) => {
    let {taskName, taskDescription, isActive, taskCreated, user_id} = req.body;
    const sql = `INSERT INTO tasks (taskName, taskDescription, isActive, taskCreated, taskCompleted, user_id) VALUES (?, ?, ?, ?, taskCompleted, ?)`;

    db.query(sql, [taskName, taskDescription, isActive = 1, taskCreated = new Date(), user_id = 1], (err, result) => {
        if(err){
            res.send("ERROR: Cannot create a new task.");
            return;
        }else{
            res.send(`${taskName.toUpperCase()} has now added!`);
        }
    })
})


// Get Specific Task using task_id

app.get("/tasks/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `SELECT * FROM tasks WHERE task_id = ${id}`;

    db.query(sql, (err, result) => {
        if(err || result.length <= 0){
            res.send("ERROR: Cannot find task with the specified ID.");
            return;
        }else{
            res.json(result);
        }
    });
})


// Complete specific task

app.put("/tasks/complete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `UPDATE tasks SET isActive = ?, taskCompleted = ? WHERE task_id = ${id}`;

    db.query(sql, [isActive = 0, taskCompleted = new Date()], (err, result) => {
        if(err || result.length <= 0){
            res.send("ERROR: Cannot complete the task or the task is not existing.");
            return;
        }else{
            res.send("SUCCESS: Task has been completed.");
        }
    })
 
})


// Delete specific task
app.delete("/tasks/delete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `DELETE FROM tasks WHERE task_id = ${id}`;

    db.query(sql, (err, result) => {
        if(err){
            res.send("ERROR: Cannot delete the task or the task is not existing.");
            return;
        }else{
            res.send("SUCCESS: Task has been deleted.");
        }
    })
})





app.listen(port, () => console.log(`Server is now running at ${port}.`));