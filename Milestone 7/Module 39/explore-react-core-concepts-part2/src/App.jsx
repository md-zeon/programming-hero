import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => alert('button clicked 2');

  const addFive = (num) => {
    return alert(num + 5);
  } 

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Explore React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> {alert('Third Clicked')}}>Click Me 3</button>
      <button onClick={()=> addFive(3)}>Click Me 4</button>
    </>
  )
}

export default App
