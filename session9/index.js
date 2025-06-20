// Session 9 / 6/20/2025

// ES6 Updates

// Exponent Operator

let number = Math.pow(10, 3); // (base number, exponent)
console.log(number); // 1000


//  Concatenation vs String Literals

// Concatenation -> uses double quote (" ") and plus sign(+) 

let name = "John";
console.log("Hello, my name is " + name + "!"); // concatenation uses + to join strings

// ${}
console.log(`Hello, my name is ${name}!`); // String literal uses `` and ${} to insert variables

let num1 = 5;
let num2 = 10;
console.log(`The total sum of ${num1} and ${num2} is ${num1 + num2}.`); // String literal with expression evaluation

// Arrow Functions (=>)

const hello = () => {
    console.log("Hello, World!");
}

hello(); // Calling the arrow function

const sum = (x, y) => {
    console.log(x + y);
}

sum(10, 20); // Calling the sum function

// if-else vs shorthand if-else


let num3 = 5;
if(num3 % 2 == 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}

// Shorthand if-else (ternary operator) if (?) else (:)

(num3 % 2 == 0) ? console.log("Even number") : console.log("Odd number");