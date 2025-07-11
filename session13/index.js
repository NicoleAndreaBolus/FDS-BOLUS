const express = require("express");
const mysql = require("mysql2"); // mysql2 package
const bodyParser = require("body-parser"); // body parser package | table data to JSON format
const bcrypt = require("bcryptjs"); // bcrypt package | password hashing


const app = express(); // server
const port = 3000; // port number

// Middlewares
app.use(express.json()); // incoming/outgoing convert to json
app.use(express.urlencoded({ extended: true })); // fetch user inputs from forms/encoded data
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
    if (err) {
        console.log("Error connecting in MySQL database.");
    } else {
        console.log("MySQL database connected successfully.");
    }
});
// Routes
// Get all task
// http.method(/endpoint)

app.get("/tasks/all", (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, result) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "server-error",
                details: "Cannot retrieve tasks from the database."
            });
            return;
        } else {
            if (result.length <= 0) {
                res.send({
                    code: 1,
                    codeMessage: "no-tasks-found",
                    details: "Task table in the database is empty."
                });
            } else {
                res.json({
                    code: 1,
                    codeMessage: "tasks-retrieved",
                    details: result
                });
            }
        }
    });
});


// Add a new task

app.post("/tasks/create", (req, res) => {
    let { taskName, taskDescription, isActive, taskCreated, user_id } = req.body;
    const sql = `INSERT INTO tasks (taskName, taskDescription, isActive, taskCreated, taskCompleted, user_id) VALUES (?, ?, ?, ?, taskCompleted, ?)`;

    db.query(sql, [taskName, taskDescription, isActive = 1, taskCreated = new Date(), user_id = 1], (err, result) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "server-error",
                details: "Cannot create a new task."
            });
            return;
        } else {
            res.send({
                code: 1,
                codeMessage: "task-added",
                details: `${taskName} has been added to your task list successfully.`
            });
        }
    })
})


// Get Specific Task using task_id
// http.method(/endpoint/:wildcard)

app.get("/tasks/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `SELECT * FROM tasks WHERE task_id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err || result.length <= 0) {
            res.send({
                code: 0,
                codeMessage: "task-not-found",
                details: "Cannot retrieve the task with the provided ID or the task is not existing."
            });
            return;
        } else {
            res.json({
                code: 1,
                codeMessage: "task-found",
                details: result
            });
        }
    });
})


// Complete specific task

app.put("/tasks/complete/:taskId", (req, res) => {
    const id = req.params.taskId;
    const sql = `UPDATE tasks SET isActive = ?, taskCompleted = ? WHERE task_id = ?`;


    db.query(sql, [isActive = 0, taskCompleted = new Date(), id], (err, result) => {
        if (err || result.length <= 0) {
            res.send({
                code: 0,
                codeMessage: "task-not-found",
                details: "Cannot complete the task or the task is not existing."
            });
            return;
        } else {
            res.send({
                code: 1,
                codeMessage: "task-completed",
                details: "The task has been marked complete successfully."
            });
        }
    })

})


// Delete Task
app.delete("/tasks/delete/:taskId", (req, res) => {
    const id = req.params.taskId;

    const sql = `DELETE FROM tasks WHERE task_id = ?`;
    const check = "SELECT * FROM tasks WHERE task_id = ?"

    db.query(check, [id], (err, result) => {
        if (err) {
            res.send({
                code: 0,
                codeMessage: "task-not-found",
                details: "The task cannot be deleted or the task is not found"
            });
            return;
        } else {
            if (result.length <= 0) {
                res.send({
                    code: 0,
                    codeMessage: "task-not-found",
                    details: "The task cannot be deleted or the task is not found"
                });
            } else {
                db.query(sql, [id], (err, result) => {
                    if (err) {
                        res.send({
                            code: 0,
                            codeMessage: "task-not-found",
                            details: "The task cannot be deleted or the task is not found"
                        });
                        return;
                    } else {
                        res.send({
                            code: 1,
                            codeMessage: "task-deleted",
                            details: "The was deleted successfully!"
                        });
                        console.log(result);
                    }
                })
            }
        }
    })
})

// USER ROUTES

// User sign up
app.post("/users/register", async (req, res) => {
    const {fname, mname, lname, email, pass} = req.body;

    if(!fname || !mname || !lname || !email || !pass){
        res.send({
            code: 0,
            codeMessage: "some-fields-empty",
            details: "Please fill all required fields."
        })
    }

    const check = "SELECT * FROM users WHERE email = ?";

    db.query(check, [email], async (err, result) => {
        if(err){
            res.send({
            code: 0,
            codeMessage: "server-error",
            details: "Cannot accept your registration at the moment."
        })
        }

        if(result.length > 0){
            res.send({
                code: 1,
                codeMessage: "user-already-existing",
                details: "The email you provided was already registered."
            })
        }else{
            const hashedPassword = await bcrypt.hash(pass, 10);

            const sql = "INSERT INTO users(fname, mname, lname, email, pass) VALUES (?, ?, ?, ? ,?)";

            db.query(sql, [fname, mname, lname, email, hashedPassword], (err, result) => {
                if(err){
                    res.send({
                    code: 0,
                    codeMessage: "server-error",
                    details: "Cannot accept your registration at the moment."
                    })
                }else{
                    res.json({
                        code: 1,
                        codeMessage: "registration-success",
                        details: `${fname} ${lname}, you are now registered.`
                    })
                }
            })
        }  

    })
})


// User login

app.post("/users/login", (req, res) => {
    const {email,pass} = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, email, async (err, result) => {
        if(err){
            res.send({
                code: 0,
                codeMessage: "server-error",
                details: "There is a problem with your request. Please try again."
            });

        }else if(result.length <= 0){
            res.send({
                code: 1,
                codeMessage: "user-not-found",
                details: "The email you provided is not registered."
            });

        }else{
            const user = result[0];
            isMatched = await bcrypt.compare(pass, user.pass);

            if(!isMatched){
                res.send({
                    code: 1,
                    codeMessage: "error-details",
                    details: "The email/password you provided is incorrect."
                });
            }else{
                res.send({
                    code: 1,
                    codeMessage: "login-success",
                    details: `Welcome to UTask, ${user.fname} ${user.lname}!`,
                });


                console.log(user);
            }
        }
    })

})











    app.listen(port, () => console.log(`Server is now running at ${port}.`));