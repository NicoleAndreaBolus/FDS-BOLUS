// console.log("Hello, World!");

// Array Traversal 

// let student1 = "UA-001";
// let student2 = "UA-002";
// let student3 = "UA-003";
// let student4 = "UA-004";
// let student5 = "UA-005"; 


// Convert to Array

let studentNumbers = [
    "UA-001",
    "UA-002",
    "UA-003",
    "UA-004",
    "UA-005"
];


// data stored in an array must have the same data type -> best practice

// Common example of arrays

let grades = [98.5, 94.3, 89.2, 90.1]; // Using a number

console.log(grades);


let computerBrands = ["Acer", "Asus", "Lenovo", "Toshiba", "Apple"]; // Using a string
console.log(computerBrands);


//  Possible use of array but not recommended

let mixedArray = [12, "John", true, null]; // Mixed data types
console.log(mixedArray);


// Creating an array with values from another variable

let city1 = "Quezon City";
let city2 = "Mabalacat City";
let city3 = "San Fernando City";
let city4and5 = ["Angeles City", "San Simon City"]; // Using a string with multiple values
// Nested array - an array inside of an array

let cities = [city1, city2, city3, city4and5]; // Using variables to create an array
console.log(cities);


// If we will be using .length using string var, it will count the number of characters including the white spaces
// .length when using in array, it will count the number of values stored in it.

console.log("Number of cities:", cities.length); // Getting the length of the array

// Accessing an Array Value

console.log(grades[0]); // 98.5
console.log(grades[3]); // 90.1
console.log(grades[10]); // undefined(empty), since there is no index 10 in the array

let lakersLegends = ["Kobe", "Shaq", "LeBron", "Magic", "Kareem"];

console.log(lakersLegends[1]); // Shaq
console.log(lakersLegends[3]); // Magic

// Re-assigning an Array Value

console.log("Array before reassignment:", lakersLegends);


lakersLegends[2] = "Gasol"; // Re-assigning the value at index 2

console.log("Array after reassignment:", lakersLegends); // ["Kobe", "Shaq", "Gasol", "Magic", "Kareem"]

let bullsLegends = ["Jordan", "Rose", "Rodman"];

let lastIndex = bullsLegends.length - 1; // Getting the last index of the array
console.log(bullsLegends[lastIndex]); // Rodman

// Adding an Item in an Array

let newArray = [];
console.log(newArray);

newArray[0] = "Cloud Strife"; // Adding an item at index 0
console.log(newArray); // ["Cloud Strife"]

newArray[newArray.length] = "Tifa Lockhart"; // Adding an item at index 1 using the length property
console.log(newArray); // ["Cloud Strife", "Tifa Lockhart"]

// Looping statement with array

for(let index = 0; index < newArray.length; index++) {
    console.log("LOOP: "+ newArray[index]);
} // LOOP: Cloud Strife, LOOP: Tifa Lockhart

let numArray = [5, 12, 30, 46, 40];

for(let index = 0; index < numArray.length; index++) {
    if(numArray[index] % 5 === 0) {
        console.log(numArray[index] + " is divisible by 5.");
    }else {
        console.log(numArray[index] + " is not divisible by 5.");
    }
    
} 

