/*

1. What is syntax error?
2. What type of error will you see?
	function errors(a) {
		if(a > 5) {
			return true
		} else {
			return false
		
		
	}
	
	console.log(errors(5));
	
3. When do we get reference error ?
4. What type of an error will this code generate? How will you fix it?
	function text() {
		var str = "Hello World";
		return str;
	}
	
	console.log(str);
	
5.	a) What is wrong with the code below:
		var foo;
		console.log(foo.bar);
	
	b) What type of error will the code generate?
	c) What is the correct way to write the code?

*/

/*

---

1. **What is a syntax error?**
   - A **syntax error** occurs when the code does not follow the correct structure or grammar of the programming language. It typically prevents the code from running because the interpreter or compiler cannot understand it.
   - Examples of syntax errors include missing parentheses, unmatched curly braces, or incorrect variable declarations.
   - Example of a syntax error:
     ```javascript
     function example() {
         console.log("Hello, world"
     } // Missing closing parenthesis
     ```

2. **What type of error will you see in this code?**
   - The provided code has a syntax error due to an unclosed curly brace (`}`) in the `if-else` block.
   - Here's the code with the syntax error:
     ```javascript
     function errors(a) {
         if (a > 5) {
             return true;
         } else {
             return false;
         } // Missing closing curly brace for function
     }
     
     console.log(errors(5)); // This line will not be reached due to the syntax error
     ```
   - To fix it, ensure that all curly braces are properly closed:
     ```javascript
     function errors(a) {
         if (a > 5) {
             return true;
         } else {
             return false;
         }
     }
     
     console.log(errors(5)); // Outputs: false
     ```

3. **When do we get a reference error?**
   - A **reference error** occurs when code attempts to access a variable or function that has not been defined or declared in the current scope.
   - Common scenarios for reference errors include misspelling variable names, accessing variables before declaration, or attempting to use a variable outside its scope.
   - Example of a reference error:
     ```javascript
     console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined
     ```

4. **What type of error will this code generate? How will you fix it?**
   - This code snippet generates a reference error because it attempts to access a variable (`str`) outside its scope.
   - Here's the problematic code:
     ```javascript
     function text() {
         var str = "Hello World";
         return str;
     }
     
     console.log(str); // ReferenceError: str is not defined
     ```
   - To fix it, ensure that the variable is declared in the proper scope or returned from a function where it is declared:
     ```javascript
     function text() {
         var str = "Hello World";
         return str;
     }
     
     console.log(text()); // Outputs: Hello World
     ```

5. **a) What is wrong with the code below:**
   - This code snippet attempts to access a property (`bar`) of `undefined`, which leads to a type error.
   - Here's the problematic code:
     ```javascript
     var foo; // foo is undefined
     console.log(foo.bar); // TypeError: Cannot read property 'bar' of undefined
     ```

   **b) What type of error will the code generate?**
   - The code generates a **type error** because it's trying to access a property on an undefined object.

   **c) What is the correct way to write the code?**
   - The correct way is to ensure that `foo` is properly initialized and contains the expected properties before accessing them:
     ```javascript
     var foo = {}; // Now foo is an empty object
     console.log(foo.bar); // Outputs: undefined (no error, but doesn't find 'bar')
     ```

   - To avoid runtime errors, you can add a check for undefined before accessing a property:
     ```javascript
     var foo = {};
     if (foo.bar === undefined) {
         console.log("Property 'bar' is undefined");
     }
     ```

---

*/