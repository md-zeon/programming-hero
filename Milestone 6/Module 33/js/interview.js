/*

1. What is an API?
2. What are the HTTP methods supported by the REST?
3. Can you use GET request instead of PUT to create a resource?
4. What is the difference between PUT and POST?
5. What is JSON?
6. What are CRUD operations?
7. What is the file extension of JSON?
8. What are the Data types supported by JSON?
9. What is the role of JSON.stringify?
10. Show how to parse a JSON.
11. GET vs POST

*/


/*
---

1. **What is an API?**
   - An **API (Application Programming Interface)** is a set of rules, protocols, or tools that define how different software applications or components can communicate with each other. It provides a way for developers to interact with a service, software, or application without needing to know its internal workings.
   - Example:
     - A weather app might use an API to fetch weather data from a weather service. The API defines how the request is made and how the response is formatted.

2. **What are the HTTP methods supported by REST?**
   - REST (Representational State Transfer) uses standard HTTP methods to perform CRUD operations on resources.
   - The most common HTTP methods in REST are:
     - `GET`: Retrieve data or resources.
     - `POST`: Create new resources.
     - `PUT`: Update or replace existing resources.
     - `DELETE`: Remove resources.
     - `PATCH`: Partially update existing resources.
   - There are other methods like `HEAD`, `OPTIONS`, etc., but these are less commonly used.

3. **Can you use GET request instead of PUT to create a resource?**
   - No, you shouldn't use a `GET` request to create a resource. `GET` is intended for retrieving data, and using it to create or modify resources would violate REST principles and introduce side effects. `PUT` or `POST` are appropriate for creating resources.
   - Example:
     - A `GET` request to `/users/123` should retrieve user data for user with ID 123.
     - A `PUT` request to `/users/123` would create or update user data for user with ID 123.

4. **What is the difference between PUT and POST?**
   - `POST` is generally used to create new resources, often leading to server-generated unique identifiers for those resources.
   - `PUT` is generally used to update or replace existing resources. If the resource does not exist, it is typically created with a specified identifier.
   - Example:
     - `POST /users`: Creates a new user, with the server assigning an ID.
     - `PUT /users/123`: Updates or replaces the user with ID 123.

5. **What is JSON?**
   - **JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for data exchange between clients and servers in web applications.
   - Example of a JSON object:
     ```json
     {
         "name": "Alice",
         "age": 25,
         "isStudent": true,
         "address": {
             "city": "New York",
             "zip": "10001"
         }
     }
     ```

6. **What are CRUD operations?**
   - CRUD stands for **Create, Read, Update, Delete**. It represents the basic operations that can be performed on data or resources in a system.
   - Example:
     - `Create`: Adding a new user.
     - `Read`: Fetching user data.
     - `Update`: Changing a user's information.
     - `Delete`: Removing a user.

7. **What is the file extension of JSON?**
   - The file extension for JSON is `.json`.
   - Example:
     - A configuration file might be named `config.json`.

8. **What are the data types supported by JSON?**
   - JSON supports the following data types:
     - `string`: A sequence of characters.
     - `number`: Numeric values (integers and floats).
     - `boolean`: `true` or `false`.
     - `array`: An ordered list of values.
     - `object`: A collection of key-value pairs.
     - `null`: Represents the absence of a value.
   - Example:
     ```json
     {
         "name": "Alice",
         "age": 25,
         "isStudent": true,
         "courses": ["Math", "Science", "History"],
         "profile": {
             "email": "alice@example.com",
             "phone": null
         }
     }
     ```

9. **What is the role of JSON.stringify?**
   - `JSON.stringify` is a JavaScript method that converts a JavaScript object or array into a JSON-formatted string.
   - This is useful for sending data over a network or storing it in a JSON file.
   - Example:
     ```javascript
     const user = {
         name: "Alice",
         age: 25,
         isStudent: true
     };

     const jsonString = JSON.stringify(user);
     console.log(jsonString); // Outputs: {"name":"Alice","age":25,"isStudent":true}
     ```

10. **Show how to parse a JSON.**
    - To parse a JSON-formatted string into a JavaScript object, you can use `JSON.parse`.
    - Example:
      ```javascript
      const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';
      const user = JSON.parse(jsonString);
      console.log(user.name); // Outputs: Alice
      console.log(user.age); // Outputs: 25
      ```

11. **GET vs POST**
    - `GET` and `POST` are two common HTTP methods with different use cases.
    - `GET` is used for retrieving data without making changes to server state. It should not have side effects and can be cached.
    - `POST` is used for creating or submitting data to the server, often resulting in server-side changes. It can have side effects and should not be cached.
    - Example:
      - `GET /users/123` retrieves data for user with ID 123.
      - `POST /users` creates a new user with the data sent in the request body.

---

*/