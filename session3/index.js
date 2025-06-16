// FDS Session 3 - June 16, 2025

// Selection Control Structures

//1. Conditional Statements

let num1 = 5;

if(num1 < 3){
    console.log("Hello!");
}

// for the if statement to work, the condition must be "true".

if(num1 > 1){
    console.log("If statement:");
}

console.log(num1 > 1);

// else statement 

if(num1 == 5){
    console.log("num1 is equal to 5");
}else{
    console.log("num1 is not equal to 5");
}

// else if statement

/*  

if(){

}else if(){

}else if(){

}else{}

*/
// true = 1, false = 0

let isLegalAge = false;
let isWorking = false;

if(isLegalAge == 1 && isWorking == 1){
    console.log("User is of legal the age and working.");
}else if(isLegalAge == 1 && isWorking == 0){
    console.log("User is of legal the age but not working.");
}else if(isLegalAge == 0 && isWorking == 1){
    console.log("User is not of legal the age but is working.");
}else{
    console.log("Record cannot be assessed.");
}


// Functions with conditional statements

function checkGender(gender){
    let formatted_gender = gender.toUpperCase();
    // Convert
    if(formatted_gender === 'M'){
        console.log("Male");
    }else if(formatted_gender === 'F'){
        console.log("Female");
    }else{
        console.log("Others");
    }
}

// Function call
checkGender('M');


// 2. Switch Case Statement

let color = prompt("Please enter r, g, or b for color");

switch (color) {
    case 'r':
        console.log("The selected color is RED.");
        break;

    case 'g':
        console.log("The selected color is GREEN.");
        break;

    case 'b':
        console.log("The selected color is BLUE.");
        break;

    default:
        console.log("The selected color is not recognized.");
        break;
}