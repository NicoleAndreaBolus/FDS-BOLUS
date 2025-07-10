CREATE DATABASE task_management;

show databases;

USE task_management;

SHOW TABLES;

CREATE TABLE users(
	user_id INT AUTO_INCREMENT NOT NULL ,
    fname VARCHAR(100) NOT NULL,
    mname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

DESC users;


CREATE TABLE tasks(
	task_id INT AUTO_INCREMENT NOT NULL,
    taskName VARCHAR(250) NOT NULL,
    taskDescription VARCHAR(10000),
    isActive BOOLEAN NOT NULL,
    taskCreated DATE NOT NULL,
    taskCompleted DATE NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (task_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

DESC tasks;


SELECT * FROM tasks;

ALTER TABLE tasks
MODIFY COLUMN taskCompleted DATE;

INSERT INTO users(fname, mname, lname, email, pass)
VALUES
("Nicole Andrea", "Gamboa", "Bolus", "nagbolus.student@ua.edu.ph", "nagb123");
