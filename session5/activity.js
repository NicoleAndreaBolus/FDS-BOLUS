/* 
1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/
// 4. Create a variable groceryList that has a value of an array of grocery items

let groceryList = ["Milk", "Eggs", "Bread", "Fish"];

console.log("=== Grocery List ===");
console.log("Items to buy:");
for(let index = 0; index < groceryList.length; index++) {
    console.log((index + 1) + ". " + groceryList[index]);
}

/*
    Important note: Don't pass the array as an argument to the function.
*/

/*
    5. Create a function which is able to receive a single argument and add a grocery item at the end of the groceryList array.
        -function should be able to receive a single argument.
        -add the grocery item at the end of the array.
        -The function should not be able to return anything.
        -invoke and add an argument to be passed in the function.
        -log the groceryList array in the console.
*/

function addItem(item){
    groceryList[groceryList.length] = item;
    console.log(item + " has been added to the list.") // Adding an item at the end of the array
}

addItem("Vegetables");
console.log("=== Updated Grocery List ===");
console.log("Items to buy:");
for(let index = 0; index < groceryList.length; index++) {
    console.log((index + 1) + ". " + groceryList[index]);
}

/*
    6. Create function which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.
*/

function getItemByIndex(index) {
    if (index < 0 || index >= groceryList.length) {
        return "Invalid index.";
    }else if (groceryList.length === 0) {
        return "The grocery list is empty.";
    }else{
        console.log("Item found at index " + index + ": " + groceryList[index]);
        console.log("Item found: " + groceryList[index]);
    }
    return groceryList[index];
};

console.log("=== Checking item index ===")
getItemByIndex(2);
getItemByIndex(0);


/*
    7. Create function which is able to delete the last item in the array after it is bought and return the deleted item.
        -Create a function scoped variable to store the last item in the groceryList array.
        -Look up how to use .length property in accessing the last element of an array and extending/shortening an array.
        -Shorten the length of the array by at least 1 to delete the last item using .length property.
        -return the last item in the array which was stored in the variable.
*/

function deleteItem() {
    if (groceryList.length == 0) {
        return "The grocery list is empty.";
    } else {
        let lastItem = groceryList[groceryList.length - 1]; // Accessing the last item
        groceryList.length -= 1; // Shortening the array by 1
        console.log("Deleted item: " + lastItem);
        return lastItem; // Returning the deleted item
    }

}

deleteItem();
console.log("=== Updated Grocery List ===");
for(let index = 0; index < groceryList.length; index++) {
    console.log((index + 1) + ". " + groceryList[index]);
}
   

/*
    8. Create function which is able to update a specific item in the groceryList array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -Log the groceryList array in the console.
*/


function updateItemByIndex(index, newItem) {

    if (index < 0 || index >= groceryList.length) {
        console.log("Invalid index."); 
    } else {
        groceryList[index] = newItem;
        console.log("Item added, updated at index " + index + ": " + newItem);
    } 
}

updateItemByIndex(1, "Veggies");
for(let index = 0; index < groceryList.length; index++) {
    console.log((index + 1) + ". " + groceryList[index]);
}


/*
    9. Create a function which is able to iterate over the array to display each item in the console.
        -This function will not receive any argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]
        -Return the newly formed array
        -Invoke the function and store it inside a variable itemsFound 
        - Log the itemsFound variable in the console.
*/
function displayItems() {
    let itemsFound = [];
    for (let index = 0; index < groceryList.length; index++) {
        console.log((index + 1) + ". " + groceryList[index]); // Adding index and item to the new array
    }
    return itemsFound;
}

console.log("=== Current Grocery List ===");
displayItems();

// let itemsFound = displayItems();
// console.log("=== Items Found ===");

/*
    10. Create a function which is able to iterate over the array to search for an item.
        -This function will receive the name of the element as an argument
        -Create an index variable with a value of 0
        -Using a for loop, iterate over the array to search for each index that has the same value as the item.
        -If it found, reassign the value of the variable to the current value of index
        -After the loop, check if the value of the varialbe is not -1
            -If so, return the string "The item exists in the list."
            -If not, return the string "The item is not in the list."
        -Invoke the function to search for an item and store the result in a variable isItemFound.
        -Log the value of isItemFound in the console.
*/

// function searchItem() {

// }

// const isItemFound
// console.log(isItemFound);

/*
11. Create a function which is able to remove a specific item in the array by index
    - This function will recieve the index as argument
    -Add an if statement to check if the index is less than 0 or greater than or equal to the .length of the groceryList
        -If it is, return invalid index.
    -Else, use for loop to iterate over the groceryList to reassign values starting from the argument sent.
        -reassign the value of the index into the next element by adding 1 to the current index
    -Outside the loop, decrease the length of the array
    -Return string Element removed successfully.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.
*/

// function removeElement() {

// }

// Test the removeElement function
// const removedElement
// console.log(removedElement); 
// console.log(groceryList);

/*
12. Create function which is able to delete all items in the array.
    -You can modify/set the length of the array.
    -The function should not return anything.
*/

// function deleteAll() {

// };
// deleteAll();
/*
13. Create a function which is able to check if the array is empty.
    -Add an if statement to check if the length of the users array is greater than 0.
        -If it is, return false.
    -Else, return true.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.

*/

// function isEmpty() {

// }

// const isUsersEmpty = isEmpty();
// console.log(isUsersEmpty);
