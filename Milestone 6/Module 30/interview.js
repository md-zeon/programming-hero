/* ES6 Interview Questions:

1. What is ES6? Have you ever used anything from ES6 ?
2. Explain the difference between var, let and const?
3. What is the arrow function and how to create it?
4. Give an example of an arrow function in ES6? list down its advantages.
5. Discuss spread operator in ES6 with an example.
6. What do you understand about default parameters
7. What are the template literals in ES6?
8. Tell us the difference between arrow and regular function. (***)
9. Tell us the difference between seal and freeze.
10. Tell us the difference between for...of and for...in

*/

/*

###! 1. What is ES6? Have you ever used anything from ES6?
- **ES6 (ECMAScript 2015)**: It is the 6th edition of the ECMAScript standard, a scripting language specification. JavaScript is based on ECMAScript. ES6 introduced major enhancements and new features to JavaScript, including new syntax, operators, and concepts that improve code structure and developer productivity.
- **Examples of ES6 Features**:
  - Arrow functions (`=>`)
  - Block-scoped declarations (`let`, `const`)
  - Classes
  - Destructuring
  - Spread/rest operators (`...`)
  - Template literals (backticks and `${}`)
  - Default parameters
  - Promises
  - Modules (`import`/`export`)

### 2. Explain the difference between `var`, `let`, and `const`?
- **`var`**:
  - Function-scoped: Visible within the function where it's declared.
  - Can be redeclared within the same scope.
  - Allows hoisting, which can lead to unpredictable behavior.
- **`let`**:
  - Block-scoped: Visible within the block (enclosed by `{}`) where it's declared.
  - Cannot be redeclared within the same block.
  - Supports hoisting, but only within the block scope.
- **`const`**:
  - Block-scoped, similar to `let`.
  - Cannot be redeclared or reassigned; the value remains constant after declaration.
  - Mutable properties in objects/arrays can still be changed, but the variable cannot be reassigned.

### 3. What is the arrow function, and how to create it?
- **Arrow Function**: A shorthand syntax to create functions in ES6. It uses `=>` (arrow) instead of the `function` keyword. It has shorter syntax and does not have its own `this` context, which is inherited from the outer lexical scope.
- **Creation**:
  ```javascript
  const add = (x, y) => x + y;
  ```

### 4. Give an example of an arrow function in ES6? List down its advantages.
- **Example**:
  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  console.log(greet('John')); // Output: "Hello, John!"
  ```
- **Advantages**:
  - Concise syntax.
  - Lexical scoping of `this`, `arguments`, and `super`, reducing issues with context binding.
  - Implicit return for single-expression bodies.

### 5. Discuss the spread operator in ES6 with an example.
- **Spread Operator (`...`)**: Expands an iterable (like an array or an object) into its individual elements. It can be used for array and object operations like cloning, merging, or passing arguments to functions.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

  const person = { name: 'Alice', age: 25 };
  const extendedPerson = { ...person, city: 'Paris' }; // { name: 'Alice', age: 25, city: 'Paris' }
  ```

### 6. What do you understand about default parameters?
- **Default Parameters**: Allow function parameters to have default values if no argument is provided when the function is called. This helps avoid undefined behavior and reduces the need for parameter-checking code.
- **Example**:
  ```javascript
  function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // Output: "Hello, Guest!"
  console.log(greet('Alice')); // Output: "Hello, Alice!"
  ```

### 7. What are the template literals in ES6?
- **Template Literals**: A feature in ES6 allowing string interpolation and multi-line strings. They use backticks (\`) instead of single or double quotes. You can embed expressions inside template literals using `${expression}`.
- **Example**:
  ```javascript
  const name = 'John';
  const age = 30;
  const message = `Hello, my name is ${name}, and I'm ${age} years old.`;
  console.log(message); // Output: "Hello, my name is John, and I'm 30 years old."
  ```

### 8. Tell us the difference between arrow and regular function. (***)
- **Arrow Function**:
  - Uses concise syntax with `=>`.
  - Inherits the `this` context from the surrounding lexical scope.
  - Does not have its own `arguments` object.
  - Cannot be used as constructors (no `new` keyword).
  - No `prototype` property.
- **Regular Function**:
  - Uses traditional syntax with the `function` keyword.
  - Has its own `this` context, which depends on how the function is called.
  - Has its own `arguments` object, providing access to all function arguments.
  - Can be used as constructors (with the `new` keyword).
  - Has a `prototype` property for inheritance.

### 9. Tell us the difference between `seal` and `freeze`.
- **`seal`**:
  - Makes an object non-extensible, preventing addition or removal of properties.
  - Existing properties can still be changed or made non-configurable.
  - The object's prototype cannot be changed.
- **`freeze`**:
  - Makes an object completely immutable.
  - Prevents addition, deletion, or modification of properties.
  - Properties and their values remain constant, including nested objects.
  - The object's prototype cannot be changed.

### 10. Tell us the difference between `for...of` and `for...in`.
- **`for...of`**:
  - Iterates over the values of an iterable object, such as arrays, strings, or sets.
  - Yields the actual values in the iteration.
  - Cannot be used with plain objects (only works with iterable objects).
- **`for...in`**:
  - Iterates over the property names (keys) of an object.
  - Yields the property names or keys during the iteration.
  - Works with objects and arrays (though primarily designed for objects).

*/