/*

1. Tell me something about JS engine v8 internal mechanism
2. What is event loop in JavaScript?
3. If JavaScript is single threaded, how does it handle asynchronous calls?
4. Differences between setTimeout and setInterval
5. Can you explain the difference between an async function and regular function in JavaScript?
6. What's the error handling strategy for promises that were rejected while awaiting?
7. What are the states of a promise?
8. Can you explain what the .then() method does?

*/


/*

---

1. **Tell me something about JS engine v8 internal mechanism**
   - The V8 engine is a high-performance JavaScript engine developed by Google and used in browsers like Chrome and server-side platforms like Node.js. It compiles JavaScript into machine code to improve execution speed.
   - V8 uses just-in-time (JIT) compilation to optimize code execution. It starts by interpreting JavaScript, then compiles "hot" code (frequently executed code) to machine code for better performance.
   - The engine has a garbage collector to manage memory, using techniques like generational garbage collection to efficiently reclaim unused memory.
   - Example: If you create a simple array, V8 handles memory allocation, optimizes array operations, and manages garbage collection when the array is no longer needed.
     ```javascript
     const arr = [1, 2, 3];
     ```

2. **What is event loop in JavaScript?**
   - The event loop is a fundamental part of JavaScript's asynchronous execution model, especially in single-threaded environments. It allows JavaScript to manage asynchronous tasks and events without blocking the main thread.
   - The event loop repeatedly checks a queue of tasks and executes them in order. When the call stack is empty, the event loop processes the next task from the queue.
   - Example: If you have an asynchronous function with a delay, it goes into the task queue and is processed when the main thread is free.
     ```javascript
     console.log('Start');
     setTimeout(() => {
         console.log('After 2 seconds');
     }, 2000);
     console.log('End');
     ```

3. **If JavaScript is single threaded, how does it handle asynchronous calls?**
   - JavaScript uses an event-driven, non-blocking I/O model to manage asynchronous calls. Although it has a single-threaded execution, asynchronous tasks are handled by the event loop and associated systems like the Web APIs in the browser or libuv in Node.js.
   - When an asynchronous operation is initiated (e.g., network requests, timers), it's handed off to a separate system (like Web APIs) and queued for the event loop to process later.
   - Example: When you use `setTimeout`, it doesn't block the main thread. Instead, the callback is queued for later execution, allowing other code to run.
     ```javascript
     console.log('Start');
     setTimeout(() => {
         console.log('Timeout callback');
     }, 1000);
     console.log('End');
     ```

4. **Differences between setTimeout and setInterval**
   - `setTimeout` executes a function once after a specified delay.
   - `setInterval` repeatedly executes a function at regular intervals until cleared.
   - Example using `setTimeout`:
     ```javascript
     setTimeout(() => {
         console.log('This runs after 1 second');
     }, 1000);
     ```
   - Example using `setInterval`:
     ```javascript
     const intervalId = setInterval(() => {
         console.log('This runs every second');
     }, 1000);

     // Clear the interval after 5 seconds
     setTimeout(() => {
         clearInterval(intervalId);
     }, 5000);
     ```

5. **Can you explain the difference between an async function and regular function in JavaScript?**
   - **Async functions** use the `async` keyword and allow the use of `await` to pause execution until a promise is resolved or rejected. They are designed to handle asynchronous operations in a synchronous-like manner.
   - **Regular functions** do not inherently support asynchronous behavior and operate in a standard synchronous manner.
   - Example of an async function:
     ```javascript
     async function fetchData() {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         return data;
     }

     fetchData().then(data => console.log(data));
     ```
   - Example of a regular function:
     ```javascript
     function add(x, y) {
         return x + y;
     }

     console.log(add(2, 3)); // Outputs: 5
     ```

6. **What's the error handling strategy for promises that were rejected while awaiting?**
   - To handle errors from promises while using `await`, you can use `try...catch` blocks to catch and handle exceptions.
   - Example with error handling:
     ```javascript
     async function fetchData() {
         try {
             const response = await fetch('https://api.example.com/invalid-endpoint');
             const data = await response.json();
             return data;
         } catch (error) {
             console.error('An error occurred:', error);
         }
     }

     fetchData(); // Logs error if the endpoint is invalid
     ```

7. **What are the states of a promise?**
   - A promise can be in one of three states:
     - **Pending**: The promise is in progress and has not yet been resolved or rejected.
     - **Fulfilled**: The promise has been resolved successfully.
     - **Rejected**: The promise has been rejected due to an error or other condition.
   - Example:
     ```javascript
     const myPromise = new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve('Success');
         }, 1000);
     });

     myPromise
         .then(result => console.log('Fulfilled with:', result))
         .catch(error => console.error('Rejected with:', error));
     ```

8. **Can you explain what the .then() method does?**
   - The `.then()` method is used to define a callback function that will be executed when a promise is fulfilled or resolved. It can also take a second callback function for handling rejections.
   - The method returns a new promise, allowing chaining of additional `.then()` or `.catch()` calls.
   - Example:
     ```javascript
     const myPromise = new Promise((resolve, reject) => {
         resolve('Promise fulfilled');
     });

     myPromise
         .then(result => {
             console.log(result); // Outputs: Promise fulfilled
             return 'Next step';
         })
         .then(result => {
             console.log(result); // Outputs: Next step
         })
         .catch(error => {
             console.error('An error occurred:', error);
         });
     ```

---

*/