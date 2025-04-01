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


// 🚀 4. Higher-Order Function (Function that takes another function as an argument)
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


// 🚀 5. Recursive Function (Function that calls itself)
// Useful for mathematical problems like factorial.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// 🚀 6. Function with Try-Catch (Handling Errors)
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


// 🚀 7. Async/Await Function with Try & Catch
// Makes working with asynchronous operations easier.
async function fetchPost() {
    try {
        let response = await fetch("api_link");
        let data = await response.json();
        console.log("Fetched Post:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchPost(); // Output: Fetched post from API

