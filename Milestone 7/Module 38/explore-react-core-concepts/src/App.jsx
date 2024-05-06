import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["sakib", "Shariful Raj", "Jasim", "Rubel"];
  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahaman', age: 68},
    {id: 2, name: 'Eva Chowdhury', age: 38},
    {id: 3, name: 'Shuvo Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemistry', price: 400},
    {id: 3, name: 'Higher Math', price: 200},
    {id: 4, name: 'Biology', price: 300}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => <Actor name={actor}></Actor>)}

     

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="6" score="95"></Student>
      <Student grade="5" score="97"></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device: {props.name} Price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 21;
  const money = 20;
  const person = { name: "Samiul", age: 12 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

function Student({ grade, score }) {
  // console.log(props);
  const name = "Student";
  return (
    <div className="student">
      <h3>This is a {name}</h3>
      <h4>Name:</h4>
      <p>Grade: {grade}</p>
      <h4>Score: {score}</h4>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  );
}

export default App;
