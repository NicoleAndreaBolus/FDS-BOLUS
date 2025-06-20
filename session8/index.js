// Session 8 - June 20, 2025

// console.log("Hello, World!");

//  JS Objects Style

// new -> to initialize -> to create a new instance or duplicate
// Object() -> to recognize the variable as an object


let myComputer = new Object();
console.log(myComputer); // {} empty object
console.log(typeof myComputer); // object


let computer = {}; // another way of creating an empty object
console.log(computer);

/* 
SYNTAX:

let objectName = {
    keyA: valueA,
    keyB: valueB,
    keyC: valueC
};

*/

let cellphone = {
    name: "Nokia 3210",
    manufactureDate: 1999,
};

console.log(cellphone);


// Comparison between array and object

let person1 = ["John",3, true]; // abstract data structure
// data is unstructured, no keys, just values
console.log(person1); // ["John", 3, true]


let person2 = {
    name: "John",
    age: 3,
    isVaccinated: true
};

console.log(person2); // { name: "John", age: 3, isVaccinated: true }



// Function Object Constructor

function Laptop(name, manufactureDate){
    this.brand = name; //key value pair
    this.manufactureDate = manufactureDate; // 'this' refers to the current instance of the object
}



// Instance creation using 'new' keyword

let laptop = new Laptop("Lenovo", 2008);
console.log(laptop); // Laptop { brand: 'Lenovo', manufactureDate: 2008 }

let laptop2 = new Laptop("Apple Mac", 2012);
console.log(laptop2); // Laptop { brand: 'Apple Mac', manufactureDate: 2012 }

// Accessing object properties/key pairs

// Dot Notation
console.log("Result from dot notation: " + laptop.brand); // Lenovo
console.log("Result from dot notation: " + laptop2.manufactureDate); // 2012

let array = [laptop, laptop2]; // Array of objects -> both laptop and laptop2 are objects


console.log(array[1].brand);
console.log(array[0].manufactureDate);

// Initialization of properties in an empty array

let car = {};

car.name = "Honda Civic";

console.log(car); // { name: 'Honda Civic' }
car.manufactureDate = 2019;
console.log(car); // { name: 'Honda Civic', manufactureDate: 2019 }

car.name = "Dodge Charger";
console.log(car); // { name: 'Dodge Charger', manufactureDate: 2019 }


// Objects with methods/functions

let student = {
    name: "Juan Dela Cruz",
    talk: function() {
        console.log("Hello, my name is " + this.name);
    },
}

student.talk(); // Hello, my name is Juan Dela Cruz

// console.log(student); // { name: 'Juan Dela Cruz', talk: [Function: talk] }

student.walk = function() {
    console.log(this.name + " walked 25 steps forward.");
}

student.walk(); // Juan Dela Cruz walked 25 steps forward.


// Much descriptive objects (more complicated)

let friend = {
    firstName: "Joey",
    lastName: "Smith",
    address:{
        city: "San Fernando City",
        country: "Philippines",
    }, // nested object
    email: ["joey@ua.edu.ph", "joey@gmail.com"],
    introduce: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + ". I live in " + this.address.city + ", " + this.address.country);
    },
}

console.log(friend.address.city); // San Fernando City
friend.introduce(); // Hello, my name is Joey Smith. I live in San Fernando City, Philippines
console.log(friend.email[1]); // joey@gmail.com

