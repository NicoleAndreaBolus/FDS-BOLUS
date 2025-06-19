// Session 6

// Array Mutator Methods

let fruits = ["Apple", "Orange","Kiwi","Dragon Fruit"];

console.log(fruits);
console.log(fruits.length);

// push() -> adds elements to the end of the array

fruits.push("Mango"); // Adds an element to the end of the array
console.log("New set of data: ");
console.log(fruits);

fruits.push("Avocado", "Guava");
console.log("New set of data: ");
console.log(fruits);

// Function with Array Method

function addFruit(fruit) {
    fruits.push(fruit);
    console.log("New set of data: " + fruits);
    console.log(fruit + " is now added.");
}


function displayFruits() {
    console.log(fruits);
    return fruits;
}

addFruit("Pineapple");
displayFruits();

// return vs console.log -> console.log() prints the value to the console, while return sends the value back to the caller.


// pop() -> removes the last element from the array

fruits.pop(); // Removes the last element from the array
console.log("New set of data: ");
console.log(fruits);

function removeFruit(){
    let removedFruit = fruits.pop(); // Removes the last element from the array
    // console.log(fruits[fruits.length - 1] + " has been removed.");
    console.log(removedFruit + " has been removed.");
    console.log("New set of data: ");
    console.log(fruits);
}

removeFruit();

// unshift() -> adds data/elements to the beginning of an array

fruits.unshift("Lime", "Banana");
console.log("New set of data: ");
console.log(fruits);


function unshiftFruit(fruit) {
    fruits.unshift(fruit);
    console.log(fruit + " is now added.");
    console.log("New set of data: ");
    console.log(fruits);
}

unshiftFruit("Lime");

// shift() -> removes the first data/element from the array

fruits.shift();
console.log("New set of data: ");
console.log(fruits);



function shiftFruit(){
    let removed = fruits.shift(); // Removes the first element from the array
    console.log(removed + " has been removed.");
    console.log("New set of data: ");
    console.log(fruits);
}


// splice() -> adds/removes elements from an array at a specific index

// array.splice(index, deleteCount, elementsToAdd);



fruits.splice(1, 2, "Lime", "Cherry");
console.log("New set of data: ");
console.log(fruits);

function spliceFruit(index, deleteCount, fruit) {
    fruits.splice(index, deleteCount, fruit);

}

spliceFruit(3, 1, "Avocado");
console.log("New set of data: ");
console.log(fruits);


spliceFruit(4, 0, "test1");
console.log("New set of data: ");
console.log(fruits);



// sort() -> rearranges an array in alphanumeric/alphabetical order

fruits.sort();
console.log("New set of data: ");
console.log(fruits);



// console.log() vs return in a function

// Function with Returns

function sahod(rate, day) {
    let total = rate * day;
    return total;
}


// sahod(1000, 5); // Returns the total salary

let result = sahod(1000, 5); // Stores the returned value in a variable
console.log("Total salary: " + result); // Prints the total salary


function bonus(amount){
    let totalSalary = result + amount; // Adds the bonus to the total salary
    return totalSalary; // Returns the total salary with bonus
}

let netIncome = bonus(1500); // Stores the returned value in a variable
console.log("Total salary with bonus: " + netIncome); // Prints the total salary with bonus

// return -> used to store the value in a variable and can be used later in the code
// console.log() -> used to print the value to the console, but cannot be used later in the code