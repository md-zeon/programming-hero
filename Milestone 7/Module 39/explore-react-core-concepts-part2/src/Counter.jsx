import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div style={{border: '2px solid yellow', padding: '10px 0'}}>
        <h3>Counter: {count}</h3>
        <button onClick={()=> setCount(count+1)}>Add</button>
        <button onClick={()=> setCount(count-1)}>Reduce</button>
    </div>
  )
}

export default Counter