/*

1. Tell the difference between primitive and non-primitive data types in JavaScript.
2. What are the truthy and falsy values? Give me some examples
3. What is the difference between null and undefined
4. What are the difference between double equal (==) and triple equal (===)?
5. What is scope in JavaScript?
6. Define Block scope and global scope.
7. What is hoisting in JavaScript?
8. How to use the JavaScript callback function?
9. Explain closure in JavaScript?
10. Explain passed by value and passed by reference. 

*/


/*

Here are the answers to each of your questions with explanations and examples:

---

1. **Tell the difference between primitive and non-primitive data types in JavaScript.**
   - **Primitive Data Types** are immutable and represent simple values. They are passed by value, meaning each variable holds its own copy of the data.
     - Examples: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
   - **Non-Primitive Data Types** are mutable and represent complex structures. They are passed by reference, meaning variables point to the same object in memory.
     - Examples: `object`, `array`, `function`, `set`, `map`.
   - Example of a primitive data type:
     ```javascript
     let str1 = 'hello';
     let str2 = str1;
     str1 = 'world';
     console.log(str2); // Outputs: hello
     ```
   - Example of a non-primitive data type:
     ```javascript
     let arr1 = [1, 2, 3];
     let arr2 = arr1;
     arr1.push(4);
     console.log(arr2); // Outputs: [1, 2, 3, 4]
     ```

2. **What are truthy and falsy values? Give me some examples.**
   - **Truthy values** are values that are considered true in a boolean context.
   - **Falsy values** are values that are considered false in a boolean context.
   - Examples of **falsy values**: `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`.
   - Examples of **truthy values**: Everything else, including non-empty strings, non-zero numbers, objects, arrays, and `true`.
   - Example:
     ```javascript
     if (0) {
         console.log('Truthy');
     } else {
         console.log('Falsy'); // This will be executed
     }

     if ('Hello') {
         console.log('Truthy'); // This will be executed
     }
     ```

3. **What is the difference between null and undefined?**
   - `null` is an explicitly assigned value indicating an intentional absence of value or a non-existent object.
   - `undefined` is a default value indicating that a variable has not been assigned a value or is not defined.
   - Example:
     ```javascript
     let x; // undefined
     let y = null; // explicitly set to null
     console.log(x); // Outputs: undefined
     console.log(y); // Outputs: null
     ```

4. **What are the differences between double equal (==) and triple equal (===)?**
   - `==` (double equal) is the "loose" equality operator, allowing type coercion. It compares values after type conversion.
   - `===` (triple equal) is the "strict" equality operator, which compares both value and type without type coercion.
   - Example:
     ```javascript
     console.log(1 == '1'); // Outputs: true (type coercion occurs)
     console.log(1 === '1'); // Outputs: false (types are different)
     ```

5. **What is scope in JavaScript?**
   - **Scope** defines the visibility and accessibility of variables in a program. It determines where a variable can be accessed.
   - JavaScript has various scopes, including:
     - **Global scope**: Variables declared outside of any function or block are accessible throughout the script.
     - **Function scope**: Variables declared within a function are only accessible within that function.
     - **Block scope**: Variables declared within a block (e.g., within `{}`) are accessible only within that block.
   - Example of scope:
     ```javascript
     let globalVar = 'I am global'; // Global scope

     function testScope() {
         let functionVar = 'I am in a function'; // Function scope
         console.log(globalVar); // Accessible within the function
     }

     testScope();
     // console.log(functionVar); // Error: functionVar is not accessible outside the function
     ```

6. **Define Block scope and global scope.**
   - **Block scope**: Variables declared within a block (e.g., using `let` or `const`) are accessible only within that block.
   - **Global scope**: Variables declared outside of any block or function are accessible throughout the script.
   - Example of block scope:
     ```javascript
     if (true) {
         let blockVar = 'I am in a block';
         console.log(blockVar); // Outputs: I am in a block
     }
     // console.log(blockVar); // Error: blockVar is not accessible outside the block
     ```

7. **What is hoisting in JavaScript?**
   - **Hoisting** is a JavaScript behavior where variable and function declarations are "hoisted" to the top of their scope during the compilation phase. This means you can use variables and functions before they are declared in the code.
   - However, only declarations are hoisted, not initializations. Variables declared with `var` are hoisted, but not with `let` or `const`.
   - Example of hoisting:
     ```javascript
     console.log(hoistedVar); // Outputs: undefined (because the declaration is hoisted)
     var hoistedVar = 'Hoisted!';

     hoistedFunction(); // Outputs: Function is hoisted!
     function hoistedFunction() {
         console.log('Function is hoisted!');
     }
     ```

8. **How to use the JavaScript callback function?**
   - A **callback function** is a function passed as an argument to another function. It allows you to pass custom behavior to a function, enabling asynchronous operations and flexibility in function execution.
   - Example of a callback function:
     ```javascript
     function greet(name, callback) {
         console.log(`Hello, ${name}`);
         callback(); // Invoke the callback
     }

     function afterGreet() {
         console.log('Greeting complete!');
     }

     greet('Alice', afterGreet); // Outputs: Hello, Alice \n Greeting complete!
     ```

9. **Explain closure in JavaScript.**
   - A **closure** is a function that remembers the scope where it was created, even after that scope has been exited. This allows inner functions to access outer function variables even after the outer function has completed execution.
   - Example of a closure:
     ```javascript
     function outerFunction() {
         const outerVar = 'Outer';
         function innerFunction() {
             console.log(outerVar); // The inner function has access to outerVar
         }
         return innerFunction;
     }

     const closureExample = outerFunction();
     closureExample(); // Outputs: Outer
     ```

10. **Explain passed by value and passed by reference.**
    - **Passed by value**: When a variable is passed by value, a copy of the data is made. Changes made to the copy do not affect the original variable.
    - **Passed by reference**: When a variable is passed by reference, it refers to the same object in memory. Changes made to the variable affect the original object.
    - Example of passed by value:
      ```javascript
      function increment(x) {
          x += 1; // This modifies the copy
      }

      let num = 10;
      increment(num); // num remains 10 because it is passed by value
      console.log(num); // Outputs: 10
      ```
    - Example of passed by reference:
      ```javascript
      function addElement(arr) {
          arr.push(4); // This modifies the original array
      }

      let myArray = [1, 2, 3];
      addElement(myArray);
      console.log(myArray); // Outputs: [1, 2, 3, 4] because it is passed by reference
      ```

---

*/