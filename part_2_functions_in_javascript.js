// 🚀 1. Function Declaration (Named Function)
// Function can be called before its definition due to hoisting.
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!


/* --------------------------------------------------- */


// 🚀 2. Function Expression (Anonymous Function)
// Function is stored in a variable and cannot be called before its definition.
//Using functions as arguments or return values
//Defining reusable functions.

// Functions that should be available before their declaration (hoisting).
const greetExpression = function(name) {
    return "Hello, " + name + "!";
};
console.log(greetExpression("Alice")); // Output: Hello, Alice!


/* --------------------------------------------------- */


// 🚀 3. Arrow Function (ES6)
// A shorter way to write functions, without the `function` keyword.
const greetArrow = (name) => "Hello, " + name + "!";

console.log(greetArrow("Bob")); // Output: Hello, Bob!


/* --------------------------------------------------- */


// 🚀 4. Immediately Invoked Function Expression (IIFE)
// Encapsulating variables to avoid conflicts.
// Function runs immediately after being defined, useful to avoid polluting the global scope.
(function() {
    console.log("This runs immediately! 🚀");
})(); // Output: This runs immediately!


/* --------------------------------------------------- */


// 🚀 5. Higher-Order Function (Function that takes another function as an argument)
// This function takes another function as a parameter.
// Passing one function inside another for reusability.

// Functional programming techniques.
function doMath(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(doMath(add, 5, 3)); // Output: 8


/* --------------------------------------------------- */


// 🚀 6. Callback Function (Function passed as an argument to another function)
// Commonly used in asynchronous operations.
// Asynchronous operations like API calls, file reading, etc.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded! ✅");
    }, 2000);
}

// Calling fetchData and passing a function to handle the result
fetchData((message) => {
    console.log(message); // Output (after 2 sec): Data loaded!
});


/* --------------------------------------------------- */


// 🚀 7. Recursive Function (Function that calls itself)
// Useful for mathematical problems like factorial.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


/* --------------------------------------------------- */


// 🚀 8. Function with Default Parameters
// If no argument is passed, it uses the default value.
function greetDefault(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greetDefault()); // Output: Hello, Guest!
console.log(greetDefault("David")); // Output: Hello, David!


/* --------------------------------------------------- */


// 🚀 9. Function Using Rest Parameters (`...args`)
// Allows a function to accept multiple arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


/* --------------------------------------------------- */


// 🚀 10. Function Using `this` (Object Method)
// `this` refers to the object that calls the function.
const user = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};

user.greet(); // Output: Hello, Alice!


/* --------------------------------------------------- */


// 🚀 11. Function with Try-Catch (Handling Errors)
// Useful for handling runtime errors in async functions.
function riskyFunction() {
    try {
        let result = 10 / 0;  // Example of a risky operation
        console.log("Result:", result); 
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}

riskyFunction(); // Output: Result: Infinity


/* --------------------------------------------------- */


// 🚀 12. Async/Await Function with Try & Catch
// Makes working with asynchronous operations easier.
async function fetchPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log("Fetched Post:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchPost(); // Output: Fetched post from API

