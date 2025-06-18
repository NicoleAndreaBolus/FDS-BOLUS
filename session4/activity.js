/*
PROBLEM #1:

3. Create a variable number that will store the value of the number provided by the user via the prompt.
4. Create a for loop that will be initialized with the number provided by the user, will stop when the value is less than or equal to 0 and will decrease by 1 every iteration.
5. Create a condition that if the current value is less than or equal to 50, stop the loop.
6. Create another condition that if the current value is divisible by 10, print a message that the number is being skipped and continue to the next iteration of the loop.
7. Create another condition that if the current value is divisible by 5, print the number.

PROBLEM #2:

8. Create a variable that will contain the string supercalifragilisticexpialidocious.
9. Create another variable that will store the consonants from the string.
10. Create another for loop that will iterate through the individual letters of the string based on its length.
11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
12. Create an else statement that will add the letter to the second variable.
*/

// -------------------
// PROBLEM #1
// -------------------

let num1 = Number(prompt("Enter a number: "));
console.log("The number you provided is " + num1 + ".");

for (let x = num1; x >= 0; x--) {
    if (x <= 50) {
        console.log("The current value is at 50. Terminating the loop.");
        break; // Stop the loop if the value is less than or equal to 50
    } else if (x % 10 == 0) {
        console.log("The number is divisible by 10. Skipping the number.");
        continue; // skip the current iteration if x is even
    } else if (x % 5 == 0) {
        console.log(x); // Print numbers divisible by 5
    }
}

// -------------------
// PROBLEM #2
// -------------------

let string = 'supercalifragilisticexpialidocious';
console.log(string); // Original string
let filteredString = '';

for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        continue; // Skip vowels
    } else {
        filteredString += string[i]; // Add consonants
    }
}

console.log(filteredString); // To output the new filteredstring
