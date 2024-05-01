/*

1.What's the difference between map, foreach and filter?
2.What's the difference between filter and find?
3.What's the difference between for..of and for..in?
4.How do you empty an array?
5.Difference between class and object?
6.What is the prototype chain? Or how does inheritence work in javaScript?
7.What does destructing do in es6?
8.is optional chaining is same as ternary operator?
9.What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation? 

*/

/*

Let's break down these questions one by one to help you understand the concepts in JavaScript.

### 1. What's the difference between `map`, `foreach`, and `filter`?
- **`map`**: This method creates a new array by applying a given function to each element in the original array. The resulting array will have the same number of elements as the original.
- **`foreach`**: This method executes a given function for each element in an array but does not return a new array. It's typically used for performing operations like logging or modifying existing elements, not for transforming or creating new arrays.
- **`filter`**: This method creates a new array containing elements from the original array that meet a certain condition specified by a given function. The resulting array can be shorter than the original.

### 2. What's the difference between `filter` and `find`?
- **`filter`**: Returns a new array containing all elements that meet a certain condition. It can return multiple elements or even an empty array if none meet the condition.
- **`find`**: Returns the first element that meets a specified condition, or `undefined` if no such element is found. It only returns one element, not an array.

### 3. What's the difference between `for..of` and `for..in`?
- **`for..of`**: Iterates over the values of iterable objects like arrays, strings, and other collection types. It focuses on the values themselves.
- **`for..in`**: Iterates over the property names (or keys) of an object. It can be used on arrays, but it's more appropriate for objects where you want to examine the keys.

### 4. How do you empty an array?
Here are a few common ways to empty an array in JavaScript:
- **Setting the array length to 0**:
  ```javascript
  let arr = [1, 2, 3];
  arr.length = 0; // arr is now empty
  ```
- **Assigning a new empty array**:
  ```javascript
  let arr = [1, 2, 3];
  arr = []; // arr is now empty
  ```
- **Using `splice`**:
  ```javascript
  let arr = [1, 2, 3];
  arr.splice(0, arr.length); // arr is now empty
  ```

### 5. Difference between class and object?
- **Class**: A blueprint or template for creating objects. It defines properties and methods that its objects (instances) will have.
- **Object**: An instance of a class. It represents a specific item created using the class blueprint, with its own properties and methods based on the class definition.

### 6. What is the prototype chain? Or how does inheritance work in JavaScript?
- **Prototype Chain**: In JavaScript, objects can inherit properties and methods from other objects through the prototype chain. Each object has a prototype (accessed via `__proto__` or `Object.getPrototypeOf`), which in turn may have its own prototype, forming a chain. This allows objects to share common functionality and provides a mechanism for inheritance.
  - When accessing a property or method on an object, JavaScript will look up the prototype chain to find it. If it reaches the end of the chain without finding it, it will return `undefined`.
- **Inheritance**: In JavaScript, inheritance allows one class (child or subclass) to inherit properties and methods from another class (parent or superclass). Using the `extends` keyword, you can create a subclass that inherits from a superclass, gaining all its properties and methods while also allowing for additional functionality or overrides.

### 7. What does destructuring do in ES6?
- **Destructuring**: A syntax feature in ES6 that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies code and enhances readability.
  - **Array Destructuring**:
    ```javascript
    let arr = [1, 2, 3];
    let [first, second, third] = arr; // first = 1, second = 2, third = 3
    ```
  - **Object Destructuring**:
    ```javascript
    let obj = { name: 'John', age: 30 };
    let { name, age } = obj; // name = 'John', age = 30
    ```

### 8. Is optional chaining the same as the ternary operator?
- **Optional Chaining** (`?.`): A syntax feature in ES6 that allows you to safely access nested properties without throwing an error if an intermediate property is `undefined` or `null`. It short-circuits if it encounters `undefined` or `null`.
  ```javascript
  let user = { address: { street: 'Main St' } };
  let street = user.address?.street; // 'Main St'
  let city = user.address?.city; // undefined
  ```
- **Ternary Operator** (`? :`): A shorthand for `if-else` that allows you to make conditional assignments or expressions. It evaluates a condition and returns one of two values depending on whether the condition is true or false.
  ```javascript
  let age = 20;
  let isAdult = age >= 18 ? 'Yes' : 'No'; // 'Yes'
  ```
Optional chaining checks for `undefined` or `null` at specific levels of an object, while the ternary operator checks a condition and selects between two outcomes. Although both use the `?`, they serve different purposes and are not equivalent.

### 9. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation?
- **Dot Notation**: A syntax to access properties of an object using a period (`.`) followed by the property name. It's concise and clear but requires that the property name be a valid identifier.
  ```javascript
  let user = { name: 'Alice' };
  let name = user.name; // 'Alice'
  ```
- **Bracket Notation**: A syntax to access properties using square brackets (`[]`) with a string or expression inside. It can be used with dynamic property names, property names with special characters, or reserved words.
  ```javascript
  let user = { 'first-name': 'Bob' };
  let firstName = user['first-name']; // 'Bob'
  ```

- **When to Use Dot Notation or Bracket Notation**:
  - Use **dot notation** when you have a known, simple property name that follows standard naming rules (like variable names).
  - Use **bracket notation** when you need to access properties dynamically, use special characters, or interact with reserved words. It can also be helpful when you want to use a variable to refer to a property name.

I hope this helps! Let me know if you have other questions or need further clarification on any topic.

*/