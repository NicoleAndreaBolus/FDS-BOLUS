// Session 7

// Non-Mutator Methods

// Mutator vs Non-Mutator Methods
// Mutator methods change/transforms the original array, 
// while non-mutator methods return a new array or value without modifying the original array.


let countries = ["US", "PH", "CAN", "SG", "TH", "PH", "FR", "DE"];

// indexOf() -> returns the first index of a specified value in an array

let indexOf = countries.indexOf("PH"); // Returns the first index of "PH" in the array
console.log("indexOf: " + indexOf); // Outputs: 1


let indexOf2 = countries.indexOf("BR"); // Returns the first index of "BR" in the array
console.log("indexOf2: " + indexOf2); // Outputs: -1

// indexOf() -> checks if a value exists in the array,
// returns its index(number) or -1 if not found


// lastIndexOf() -> returns the last index of a specified value in an array

let lastIndexOf = countries.lastIndexOf("PH"); // Returns the last index of "PH" in the array
console.log("lastIndexOf: " + lastIndexOf); // Outputs: 5

let lastIndexOf2 = countries.lastIndexOf("PH", 6); // Returns the last index of "PH" in the array
console.log("lastIndexOf2: " + lastIndexOf2); // Outputs: 5

let lastIndexOf3 = countries.lastIndexOf("PH", 3); // Returns the last index of "PH" in the array
console.log("lastIndexOf3: " + lastIndexOf3); // Outputs: 1


// lastIndexOf() -> checks if a value exists in the array, descending from the end,
// data validation

// slice() -> returns a shallow copy of a portion of an array into a new array object

let sliceA = countries.slice(2); // Returns a new array from index 2 to the end
console.log("result from sliceA: ");
console.log(sliceA); // Outputs: ["CAN", "SG", "TH", "PH", "FR", "DE"]

let sliceB = countries.slice(2, 4); // Returns a new array from index 2 to 4
console.log("result from sliceB: ");
console.log(sliceB); // Outputs: ["CAN", "SG"]

let sliceC = countries.slice(-3); // Returns a new array from index 2 to 4
console.log("result from sliceC: ");
console.log(sliceC); // Outputs: ["TH", "PH", "FR", "DE"]


// concat() -> returns a new array by combining two or more arrays

let taskA = ["drink html", "eat javascript"];
let taskB = ["inhale css", "breathe sass"];
let taskC = ["get git", "be node"];

let tasks = taskA.concat(taskB);
console.log("result from tasks: ");
console.log(tasks); // Outputs: ["drink html", "eat javascript", "inhale css", "breathe sass"]

let allTasks = taskA.concat(taskB, taskC);
console.log("result from allTasks: ");
console.log(allTasks); // Outputs: ["drink html", "eat javascript", "inhale css", "breathe sass", "get git", "be node"]

let combinedTasks = allTasks.concat("smell express", "throw react");
console.log("result from combinedTasks: ");
console.log(combinedTasks); // Outputs: ["drink html", "eat javascript", "inhale css", "breathe sass", "get git", "be node", "smell express", "throw react"]

// iteration method -> shorcut version for array iteration

// forEach() -> executes a provided function once for each array element

allTasks.forEach(function(task){
    console.log(task);
})

let filteredTasks = [];
allTasks.forEach(function(task){
    if(task.length > 10){
        filteredTasks.push(task);
    }
})

console.log("result from filteredTasks: ");
console.log(filteredTasks); // Outputs: ["inhale css", "breathe sass", "smell express", "throw react"]


let numbers = [1, 2, 3, 4, 5];

// every() -> tests whether all elements in the array pass the test implemented by the provided function

let allValid = numbers.every(function(number){
    return number < 10; // Checks if all numbers are less than 10
})

console.log(allValid); // Outputs: false

let allValid2 = numbers.every(function(number){
    return number < 3; // Checks if all numbers are less than 3
})
console.log(allValid2); // Outputs: false

// every() -> returns true if all elements pass the test, otherwise false

// some() -> tests whether at least one element in the array passes the test implemented by the provided function

let someValid = numbers.some(function(number){
    return number < 4; // Checks if at least one number is less than 4
})
console.log(someValid);


// filter() -> creates a new array with all elements that pass the test implemented by the provided function

let filterValid = numbers.filter(function(number){
    return number < 3; // Keeps only numbers less than 3
})
console.log(filterValid); // Outputs: [1, 2]
