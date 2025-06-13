// SESSION 2 - 6/13/2025

// console.log("Hello World!")

// JS BASIC FUNCTION/S

function sayHello(){
    console.log("Hello World!");
}

// function calling  // Invocation

sayHello(); // This is a function call or invocation

function completeName(){
    // Local Scope Variable -> fullName
    let fullName = "Juan Dela Cruz";
    console.log(fullName);
}

completeName(); 
// console.log(fullName); -> error: fullName is not defined


// Global and Local Scope Variables

let age = 20; // Global Scope Variable - accessible anywhere in the script

{
    // Local Scope Variable
    const pi = 3.14;
    console.log(age); // Accessing the global variable inside the curly braces
}

// Accessing the variable inside the curly braces
// console.log(pi); -> error: pi is not defined

let studentName = "Mary Poppins";

function getName(){
    let age = 50;
    console.log(studentName + " age is " + age); // Accessing the global variable inside the function
}

getName(); // Calling the function to see the output / Invocation

// Function with Alert

function helloAlert(){
    alert("Hello World!");
}

// It is not necessary to call the function in the js file. We can also call a function in the Console Panel of the browser

// Function with Prompt()

function enterName(){
    let inputName = prompt("Please enter your name:");
    console.log("Hello there, " + inputName + "!");
}

// Parameterized Functions
// Parameters are variable-like code. It can gather client/user inputs.

function FullName(name){
    console.log("Welcome, " + name + "!");
}

// Function Invocation with Argument

FullName("Joey");

function introduceYourPet(name, breed, age){
    // console.log("My pet's name is " + name + ", a " + breed + " who is " + age + " years old.");
    console.log("My pet name is " + name);
    console.log("He/She is a " + breed);
    console.log("He/She is " + age + " years old.");
}

introduceYourPet("Max", "Golden Retriever", 3);
introduceYourPet("Bella", "Siamese Cat", 2);
introduceYourPet("Charlie", "Parrot", 1);
