// Variables and Data Types
let name = "John";  // String
let age = 25;       // Number
let isStudent = true; // Boolean
let hobbies = ["Reading", "Gaming", "Coding"]; // Array
let person = { name: "Alice", age: 22 }; // Object
const sample = "hello" //const variable
// sample = "hey" : THIS doesnt work as it is a constant . reassignation of a const variable raises error
console.log(name, age, isStudent, hobbies, person,sample);



function myFunc() {
    var x = 10; // x is function-scoped
    if (true) {
      var y = 20; // y is also function-scoped, accessible outside the if block
      let z = 30; // z is block-scoped, only accessible within the if block
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
    // console.log(z); // Error: z is not defined (z is not accessible outside the if block)
  }
  myFunc();
  