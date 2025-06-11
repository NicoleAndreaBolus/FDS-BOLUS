// INTRODUCTION TO JAVASCRIPT
/* This is a multi-line comment */

/*

HISTORY

Brendan Eich (Netscape) created JavaScript in 1995.
JavaScript was originally called Mocha, then renamed to LiveScript, and finally to JavaScript.
Browser Name: Netscape Navigator
Primary role of JavaScript: To make web pages / applications interactive/live.

*/

// JS BASICS

console.log("Hello, World!"); // Output to the console

// JS VARIABLES AND DATA TYPES
// Variables are containers for storing data values.
// In JavaScript, there are three ways to declare variables: var, let, and const.

let name = "John"; // String
console.log(name); // Output: John

let age = 30; // Number
console.log(age); // Output: 30

// typeof -> is used to check the data type of a variable
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number

let temp = 38.5;
console.log(temp); // Output: 38.5
console.log(typeof temp); // Output: number

let bool = true; // Boolean
console.log(bool); // Output: true
console.log(typeof bool); // Output: boolean

let isOverloaded = true; // Boolean
console.log(isOverloaded); // Output: true
console.log(typeof isOverloaded); // Output: boolean


// Array
let fruits = ["Apple", "Banana", "Cherry"]; // Array
let students = ["John", "Jane", "Joey"]; // Array of strings
console.log(students); // Output: [ 'John', 'Jane', 'Joey' ]

// Object
// key-pair structure

let person = {
    name: "John Doe",
    age: 19,
    email: ["jdoe@mail.com", "john.doe@example.com", "john@fb.com"]
}
console.log(person); // Output: { name: 'John Doe', age: 19, email: [ '
console.log("Hello World!")


// Alert

alert("Hello, admin!");
// Alert is used to display a message to the user

// Initialization and Variables with no data
// let vs const

// Initialization
let num1 = 10; // Variable declaration and initialization
console.log(num1); 

// uninitialized variable
let num2; // Variable declaration without initialization
console.log(num2); // Output: undefined

num1 = 500; // Reassigning a new value to the variable
console.log(num1); // Output: 500

num2 = 1000;
console.log(num2); // Output: 1000

// let vs const

// const -> used to declare a constant variable

const height= 130;
console.log(height); // Output: 130

// with let variables, data can be reassigned/updated

// height = 150; // This will throw an error because const variables cannot be reassigned

const hoursInADay = 24; // Constant variable
const pi = 3.14; // Constant variable
const numOfMonths = 12; // Constant variable


// JS Arihthmetic Operators

let x = 10;
let y = 5;

let sum = x + y; // Addition
console.log("Sum:", sum); // Output: Sum: 15

let difference = x - y; // Subtraction
console.log("Difference:", difference); // Output: Difference: 5

let product = x * y; // Multiplication
console.log("Product:", product); // Output: Product: 50

let quotient = x / y; // Division
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulo
let mod = x % y; // Modulus (remainder)
console.log("Modulus:", mod); // Output: Modulus: 0


// Comparison Operators
console.log(x > y); // Output: true (greater than) boolean
console.log(x < y); // Output: false (less than) boolean
console.log(x >= y); // Output: true (greater than or equal to) boolean
console.log(x <= y); // Output: false (less than or equal to) boolean
console.log(x == y); // Output: false (equal to) boolean
console.log(x != y); // Output: true (not equal to) boolean

// Logical Operators
// And (&&), Or (||), Not (!)

let isMarried = true;
let isLegalAge = false;

console.log("Logical AND");
// And (&&) operator
console.log(isMarried && isLegalAge); // Output: false

// Or (||) operator
console.log(isMarried || isLegalAge); // Output: true

// Not (!) operator
console.log(!isMarried); // Output: false

// Equality Operators

let sample1 = 10;
let sample2 = "10";
let sample3 = "John";

// == (Equality)
console.log(sample1 == sample2); // Output: true (value is equal, type is not checked)
console.log(sample3 == "John"); // Output: true (value is equal)

// != (Inequality)
console.log(sample1 != sample2); // Output: false (value is equal, type is not checked)

// === (Strict Equality)
console.log(sample1 === sample2); // Output: false (value and type are checked)
console.log(sample3 === "John"); // Output: true (value and type are equal)

// !== (Strict Inequality / Strictly Not Equal)
console.log(sample1 !== sample2); // Output: true (value and type are checked)

// prompt
// The prompt() method displays a dialog box that prompts the user for input.
// User Input
let fullName = prompt("Please enter your full name:");
console.log("User Full Name:", fullName); // Output: User Full Name: (user's input)

// Dynamic Sum Operation
let input1 = Number(prompt("Enter first number:"));
let input2 = Number(prompt("Enter second number:"));
let result = input1 + input2;
console.log("Dynamic Sum Result:", result);

// Concatenation
let concat1 = "Jane";
let concat2 = 10;

console.log(concat1 +  " is " + concat2 + " years old."); // Output: Jane is 10 years old.
